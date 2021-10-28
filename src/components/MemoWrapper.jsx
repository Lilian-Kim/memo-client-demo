// 임시
import React, { useState } from "react";
import { map } from "lodash";
import Memo from "./Memo";

const MemoWrapper = () => {
  const [memoList, setMemoList] = [];
  return (
    <div className="memo__outer-wrapper">
      {memoList ? (
        map(memoList, memo => <Memo />)
      ) : (
        <div>
          <p>등록된 메모가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default MemoWrapper;
