import './style.css'

// 追加ボタンを押した時の関数

const onClickAdd = () => {
    // 入力内容を変数で取得.value
    const inputText = document.getElementById("add-text").value;
    // 値を取得したら、テキストボックスは空にする
    document.getElementById("add-text").value = "";
    createIncompleteTodo(inputText);
}


// 渡された引数を元に未完了のtodoを作成する関数
const createIncompleteTodo = (todo) => {
    // DOM生成
    // まずli生成
    const li = document.createElement("li");
    // divも生成し、classの名前をつける
    const div = document.createElement("div");
    div.className = "list-row";
    // pタグ（todoの内容）も生成！innerTextで中身を指定
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    // 完了ボタン生成&押した時の処理
    const completebutton = document.createElement("button");
    completebutton.innerText = "完了";
    completebutton.addEventListener("click", ()=>{
        // moveTargetを取得（li要素）
        const moveTarget = completebutton.closest("li");
        // 削除ボタンを消す。「このボタンの次のボタン」を消す
        completebutton.nextElementSibling.remove();
        // 完了ボタンも消す。
        completebutton.remove();

        // 戻すボタンを生成！
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        // 循環するような関数によって戻す機能を実現
        backButton.addEventListener("click", ()=>{
            // todoの内容を取得。「このボタンの前の要素」として取得
            const todoText = backButton.previousElementSibling.innerText
            // 「未完了のtodoに追加する関数」を実行して戻す
            createIncompleteTodo(todoText);
            // 「完了したtodo」からは削除
            backButton.closest("li").remove();
        })

        // divタグ配下に戻すボタンを設定。もう完了ボタンがないので工夫が必要、moveTargetの子供としてdivを指定
        moveTarget.firstElementChild.appendChild(backButton);
        // 完了リストに移動！
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    // 削除ボタン生成&押した時の処理
    const deletebutton = document.createElement("button");
    deletebutton.innerText = "削除";
    deletebutton.addEventListener("click", ()=>{
        // liタグを未完了リストから削除
        // 押された削除ボタンを起点にclosest（一番近い）liを探し、
        // 削除する要素deleteTargetとする
        const deleteTarget = deletebutton.closest("li");
        // ulタグの子供からdeleteTargetを消す、removeChild
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })


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
};


// 追加ボタンの機能
// documentの中にあるメソッド、getElementById（エレメントをidによって取得）
// さらに、addEventListenerメソッドでボタンが押されたというイベントを検知。
// 二つの引数。何を検知するか（click）、それを検知したら何を実行するか（onClickAdd関数）
document.getElementById("add-button").addEventListener("click", onClickAdd);


