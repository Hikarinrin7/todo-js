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
    p.innerText = inputText;
    // 完了ボタン生成&押した時の処理
    const completebutton = document.createElement("button");
    completebutton.innerText = "完了";
    completebutton.addEventListener("click", ()=>{
        alert("完了");
    })
    // 削除ボタン生成&押した時の処理
    const deletebutton = document.createElement("button");
    deletebutton.innerText = "削除";
    deletebutton.addEventListener("click", ()=>{
        alert("削除");
    })
    // 完了・削除ボタンは追加ボタンと違ってこちらで定義してDOM生成しているので、
    // html側にid設定して…とかじゃなくここでやっちゃう

    // 生成した要素の階層構造を作る
    // divの配下にpとボタンをおく！という指示
    div.appendChild(p);
    div.appendChild(completebutton);
    div.appendChild(deletebutton);
    
    // 同様に、liの配下にdivをおく
    li.appendChild(div);
    // 最後に、ul要素の配下にliをおくことで、未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);

    // // これで確認する
    // console.log(deletebutton);
    // // 確認用のalert
    // alert(onClickAdd);
}

// 追加ボタンの機能
// documentの中にあるメソッド、getElementById（エレメントをidによって取得）
// さらに、addEventListenerメソッドでボタンが押されたというイベントを検知。
// 二つの引数。何を検知するか（click）、それを検知したら何を実行するか（onClickAdd関数）
document.getElementById("add-button").addEventListener("click", onClickAdd);


