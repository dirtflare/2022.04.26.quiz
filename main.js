function check() {
//クイズ問題
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

//第1問の回答
	if (question1 == "NAS") {
		correct++;
	}
//第2問の回答
	if (question2 == "NAS") {
		correct++;
	}	
//第3問の回答
	if (question3 == "NAS") {
		correct++;
	}
	
	//回答後に表示（写真）&（文字）
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["YOU ARE A NAS MASTER", "YOU SHOULD TRUST NAS MORE.", "YOU DON'T TRUST NAS"];
	var score;

	//0問正解
	if (correct == 0) {
		score = 2;
	}
	//1~2問正解
	if (correct > 0 && correct < 3) {
		score = 1;
	}
	//全問正解
	if (correct == 3) {
		score = 0;
	}

	//クリック正解判定後に現れるウィンドウの動作（visible）
	document.getElementById("after_submit").style.visibility = "visible";
	// 正解数に応じたメッセージ（英語部分）
	document.getElementById("message").innerHTML = messages[score];
	// 正解判定画面の固定テキスト（正解数の表示）
	document.getElementById("number_correct").innerHTML = "あなたは " + correct + " 問正解しました。";
	// 正解判定画面の写真
	document.getElementById("picture").src = pictures[score];
	}
	
