import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickDeleteComment = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onLoadMore = () => {
    if (!data) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
