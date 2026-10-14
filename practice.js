const library = document.getElementById("practice-library");

const calc2Questions = questions.filter(
  question => question.course === "calculus-2"
);

const sections = [
  ...new Set(calc2Questions.map(question => question.section))
];


sections.forEach(sectionName => {

  const section = document.createElement("section");
  section.className = "practice-section";

  const heading = document.createElement("h2");
  heading.textContent = sectionName;

  section.appendChild(heading);


  const sectionQuestions = calc2Questions.filter(
    question => question.section === sectionName
  );

if (window.MathJax && window.MathJax.typesetPromise) {
  MathJax.typesetPromise();
}
  
  sectionQuestions.forEach((question, index) => {

    const card = document.createElement("article");

    card.className = "question-card";
    card.id = question.id;


    const choicesHTML = question.choices
      .map((choice, choiceIndex) => `
        <label class="question-choice">

          <input
            type="radio"
            name="${question.id}"
            value="${choiceIndex}"
          >

          <span>${choice}</span>

        </label>
      `)
      .join("");


    card.innerHTML = `

      <p class="question-number">
        Question ${index + 1}
      </p>

      <h3>
        ${question.question}
      </h3>

      <div class="question-choices">
        ${choicesHTML}
      </div>

      <button
        class="check-answer"
        type="button"
      >
        Check Answer
      </button>

      <div
        class="question-feedback"
        aria-live="polite"
      ></div>

    `;


    const button =
      card.querySelector(".check-answer");

    const feedback =
      card.querySelector(".question-feedback");


    button.addEventListener("click", () => {

      const selected =
        card.querySelector(
          `input[name="${question.id}"]:checked`
        );


      if (!selected) {

        feedback.className =
          "question-feedback feedback-neutral";

        feedback.textContent =
          "Please select an answer first.";

        return;
      }


      const selectedIndex =
        Number(selected.value);


      if (selectedIndex === question.correct) {

        feedback.className =
          "question-feedback feedback-correct";

        feedback.innerHTML = `
          <strong>Correct!</strong>
          ${question.explanation}
        `;

      } else {

        feedback.className =
          "question-feedback feedback-incorrect";

        feedback.innerHTML = `
          <strong>Not quite.</strong>
          ${question.explanation}
        `;

      }

    });


    section.appendChild(card);

  });


  library.appendChild(section);

});
