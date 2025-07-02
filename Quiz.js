function checkAnswer() {
    const radios = document.getElementsByName('radio');
    let selectedValue = '';

    // Find the selected radio button's value
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }

    const correctAnswer = "災害発生時にシステムが長時間停止するのを防ぐ。"; // The correct answer for the given question

    // Check if an option was selected
    if (selectedValue === '') {
        alert("選択してください。"); // Prompt the user to select an option if none is chosen
        return;
    }

    // Display "正解" or "不正解"
    if (selectedValue === correctAnswer) {
        alert("正解");
    } else {
        alert("不正解");
    }
}