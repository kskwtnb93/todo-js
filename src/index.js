import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomleteList(inputText);
};

// 未完了リストから指定のリストを削除
const deleteFromIncomleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomleteList = (text) => {
  // li を生成
  const li = document.createElement("li");
  li.className = "todo-list__item";

  // p を生成
  const p = document.createElement("p");
  p.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素を未完了リストから削除する
    deleteFromIncomleteList(completeButton.parentNode);
    // 関数化したので不要
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);

    // 完了リストに追加する
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された削除ボタンの親要素を未完了リストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容テキストを取得
      const text = deleteTarget.firstElementChild.innerText;
      console.log(text);

      createIncomleteList(text);
    });

    // liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素を未完了リストから削除する
    deleteFromIncomleteList(deleteButton.parentNode);
    // 関数化したので不要
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
