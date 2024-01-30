// Set of questions and their answers
const question_set = [
    {
        question: "What is the Capital of West Bengal?",
        options: ["Kolkata", "Calcutta", "Calicata", "Bangla"],
        correct_ans: "Kolkata"
    },
    {
        question: "What is the Capital of Bihar?",
        options: ["Bawandar", "Chattisgarh", "Annam", "Mirzapur"],
        correct_ans: "Chattisgarh"
    },
    {
        question: "What is the staple food of Bengal?",
        options: ["Chop", "Muri", "Aloo CHokha", "Bhaat"],
        correct_ans: "Bhaat"
    },
    {
        question: "What is the joy city of India?",
        options: ["Kolkata", "Bengaluru", "Haryana", "Delhi"],
        correct_ans: "Kolkata"
    }
];

const question_id = document.getElementById("question");
const options_container = document.getElementById("options-container");
const next_btn = document.getElementById("next-btn");
const result_container = document.getElementById("result");

let current_question_index = 0;
let score = 0;

function startQuiz() {
    current_question_index = 0;
    score = 0;
    next_btn.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion() {
    resetState();
    let current_question = question_set[current_question_index];
    let question_no = current_question_index + 1;
    question_id.innerHTML = question_no + "." + current_question.question;

    // Options
    current_question.options.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("opt");
        button.addEventListener("click", function () {
            checkAnswer(answer);
        });
        options_container.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const current_question = question_set[current_question_index];

    if (selectedAnswer === current_question.correct_ans) {
        result_container.innerHTML = "Correct!";
        score++;
    } else {
        result_container.innerHTML = "Wrong! The correct answer is: " + current_question.correct_ans;
    }

    current_question_index++;
    if (current_question_index < question_set.length) {
        next_btn.style.display = "block";
    } else {
        // Quiz finished
        result_container.innerHTML = "Quiz Finished! Your Score: " + score + " out of " + question_set.length;
        next_btn.style.display = "none";
    }
}

function resetState() {
    result_container.innerHTML = "";
    next_btn.style.display = "none";
    while (options_container.firstChild) {
        options_container.removeChild(options_container.firstChild);
    }
}

startQuiz();
