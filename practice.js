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


  sectionQuestions.forEach((question, index) => {


    /* =========================================
       BUCKET / CLASSIFICATION QUESTIONS
    ========================================= */

    if (
      question.type === "integration-method-bucket" ||
      question.type === "classification-bucket"
    ) {

      const shuffled = [...question.pool]
        .sort(() => Math.random() - 0.5);

      const selectedItems = shuffled.slice(
        0,
        question.numberToDraw
      );


      const card = document.createElement("article");

      card.className = "question-card";
      card.id = question.id;


      const rowsHTML = selectedItems
        .map((item, itemIndex) => {

          const methodOptions = question.methods
            .map(method => `
              <option value="${method}">
                ${method}
              </option>
            `)
            .join("");


          return `
            <div class="method-row">

              <div class="method-integral">
                <span class="method-number">
                  ${itemIndex + 1}.
                </span>

                ${item.integral}
              </div>

              <select
                class="method-select"
                data-correct="${item.correct}"
                aria-label="Choose answer for item ${itemIndex + 1}"
              >
                <option value="">
                  ${question.selectPrompt || "Choose an answer"}
                </option>

                ${methodOptions}
              </select>

              <div
                class="method-result"
                aria-live="polite"
              ></div>

            </div>
          `;
        })
        .join("");


      card.innerHTML = `

        <p class="question-number">
          Question ${index + 1}
        </p>

        <h3>
          ${question.question}
        </h3>

        ${
          question.instructions
            ? `<p class="method-instructions">${question.instructions}</p>`
            : ""
        }

        <div class="method-question-list">
          ${rowsHTML}
        </div>

        <button
          class="check-answer check-methods"
          type="button"
        >
          Check Answers
        </button>

        <div
          class="question-feedback method-summary"
          aria-live="polite"
        ></div>
      `;


      const checkButton =
        card.querySelector(".check-methods");

      const summary =
        card.querySelector(".method-summary");


      checkButton.addEventListener("click", () => {

        const selects =
          card.querySelectorAll(".method-select");

        let correctCount = 0;
        let unanswered = 0;


        selects.forEach(select => {

          const result =
            select.parentElement.querySelector(
              ".method-result"
            );


          if (select.value === "") {

            unanswered++;

            result.className =
              "method-result method-unanswered";

            result.textContent =
              "Choose an answer.";

          }

          else if (
            select.value === select.dataset.correct
          ) {

            correctCount++;

            result.className =
              "method-result method-correct";

            result.textContent =
              "✓ Correct";

          }

          else {

            result.className =
              "method-result method-incorrect";

            result.textContent =
              "Try again.";

          }

        });


        if (unanswered > 0) {

          summary.className =
            "question-feedback feedback-neutral method-summary";

          summary.textContent =
            "Complete all items before checking your final score.";

        }

        else {

          summary.className =
            "question-feedback feedback-correct method-summary";

          summary.innerHTML =
            `<strong>${correctCount} out of ${selectedItems.length} correct.</strong>`;

        }

      });


      section.appendChild(card);

      return;
    }


    /* =========================================
       REGULAR MULTIPLE CHOICE QUESTIONS
    ========================================= */

    if (question.type === "multiple-choice") {

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

        }

        else {

          feedback.className =
            "question-feedback feedback-incorrect";

          feedback.innerHTML = `
            <strong>Not quite.</strong>
            ${question.explanation}
          `;

        }

      });


      section.appendChild(card);
    }

  });


  library.appendChild(section);

});


/* =========================================
   RENDER MATHJAX AFTER QUESTIONS ARE BUILT
========================================= */

if (
  window.MathJax &&
  window.MathJax.typesetPromise
) {
  MathJax.typesetPromise();
}
