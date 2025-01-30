import './style.css'

// 追加ボタンを押した時の関数

const onClickAdd = () => {
    // 入力内容を変数で取得.value
    const inputText = document.getElementById("add-text").value;
    // 値を取得したら、テキストボックスは空にする
    document.getElementById("add-text").value = "";

    // DOM生成
    // まずli生成
    const li = document.createElement("li");
    // divも生成し、classの名前をつける
    const div = document.createElement("div");
    div.className = "list-row";
    // pタグ（todoの内容）も生成！innerTextで中身を指定
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = "inputText";

    // 生成した要素の階層構造を作る
    // divの配下にpをおく！という指示
    div.appendChild(p);
    // 同様に、liの配下にdivをおく
    li.appendChild(div);


    console.log(li); // これで確認する


    // 確認用のalert
    alert(onClickAdd);
}

// documentの中にあるメソッド（エレメントをidによって取得）
// さらに、addEventListenerメソッドでボタンが押されたというイベントを検知。
// 二つの引数。何を検知するか（click）、それを検知したら何を実行するか（onClickAdd関数）
document.getElementById("add-button").addEventListener("click", onClickAdd);


