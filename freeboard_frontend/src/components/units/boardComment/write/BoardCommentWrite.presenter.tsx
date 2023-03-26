import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.PencilIcon src="/images/boardComment/write/pencil.png" />
        <span>{props.isEdit ? "댓글 수정" : "댓글 작성"}</span>
        <S.Star onChange={props.setRate} value={props.rate} />
      </S.TitleWrapper>
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          defaultValue={props.isEdit ? String(props.el?.writer) : ""}
        />
        <S.Input placeholder="비밀번호" onChange={props.onChangePassword} />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          defaultValue={props.isEdit ? props.el?.contents : ""}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button
            onClick={
              props.isEdit
                ? props.onClickUpdateComment
                : props.onClickCreateComment
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}