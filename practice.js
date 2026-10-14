const library = document.getElementById("practice-library");

const calc2Questions = questions.filter(
  question => question.course === "calculus-2"
);
const sections = [
  ...new Set(calc2Questions.map(question => question.section))
];


/* =========================================
   HELPER: SHUFFLE ARRAY
========================================= */

function shuffleArray(array) {

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {

    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled;
}


/* =========================================
   BUILD SECTIONS
========================================= */

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
       SORTING BUCKET QUESTION
    ========================================= */

    if (
      question.type === "sorting-bucket" ||

      // Temporary backwards compatibility
      question.type === "integration-method-bucket" ||
      question.type === "classification-bucket"
    ) {

      /*
        New preferred names:

        question.buckets
        item.content
        item.correctBucket

        Older names are supported temporarily:

        question.methods
        item.integral
        item.correct
      */

      const bucketNames =
        question.buckets ||
        question.methods ||
        [];


      const shuffledPool =
        shuffleArray(question.pool);


      const selectedItems =
        shuffledPool.slice(
          0,
          question.numberToDraw
        );


      const card =
        document.createElement("article");

      card.className =
        "question-card sorting-question";

      card.id = question.id;


      let selectedItem = null;


      /* -----------------------------------------
         BUILD ITEMS
      ----------------------------------------- */

      const itemsHTML = selectedItems
        .map((item, itemIndex) => {

          const content =
            item.content ||
            item.integral ||
            "";

          const correctBucket =
            item.correctBucket ||
            item.correct ||
            "";

          return `
            <div
              class="sorting-item"
              draggable="true"
              tabindex="0"
              data-index="${itemIndex}"
              data-correct-bucket="${correctBucket}"
              role="button"
              aria-label="Item ${itemIndex + 1}. Select or drag this item."
            >

              <span class="sorting-item-number">
                ${itemIndex + 1}.
              </span>

              <span class="sorting-item-content">
                ${content}
              </span>

            </div>
          `;

        })
        .join("");


      /* -----------------------------------------
         BUILD BUCKETS
      ----------------------------------------- */

      const bucketsHTML = bucketNames
        .map(bucketName => `

          <div
            class="sorting-bucket"
            data-bucket="${bucketName}"
          >

            <div class="sorting-bucket-title">
              ${bucketName}
            </div>

            <div
              class="sorting-dropzone"
              data-bucket="${bucketName}"
              aria-label="${bucketName} drop zone"
            >
            </div>

            <button
              type="button"
              class="sorting-place-button"
              data-bucket="${bucketName}"
            >
              Place selected item here
            </button>

          </div>

        `)
        .join("");


      /* -----------------------------------------
         BUILD QUESTION CARD
      ----------------------------------------- */

      card.innerHTML = `

        <p class="question-number">
          Question ${index + 1}
        </p>

        <h3>
          ${question.question}
        </h3>

        ${
          question.instructions
            ? `
              <p class="sorting-instructions">
                ${question.instructions}
              </p>
            `
            : ""
        }

        <div class="sorting-bank">

          <h4>
            ${question.bankTitle || "Items to Sort"}
          </h4>

          <div class="sorting-item-container">
            ${itemsHTML}
          </div>

        </div>


        <div class="sorting-buckets">
          ${bucketsHTML}
        </div>


        <button
          type="button"
          class="check-answer sorting-check-button"
        >
          Check Answers
        </button>


        <div
          class="question-feedback sorting-summary"
          aria-live="polite"
        ></div>

      `;


      /* -----------------------------------------
         MOVE ITEM TO BUCKET
      ----------------------------------------- */

      function moveItemToBucket(
        item,
        bucketName
      ) {

        if (!item) {
          return;
        }


        const dropzone =
          [...card.querySelectorAll(
            ".sorting-dropzone"
          )]
          .find(
            zone =>
              zone.dataset.bucket ===
              bucketName
          );


        if (!dropzone) {
          return;
        }


        dropzone.appendChild(item);


        item.dataset.assignedBucket =
          bucketName;


        item.classList.remove(
          "selected"
        );


        selectedItem = null;
      }


      /* -----------------------------------------
         ITEM SELECTION + DRAGGING
      ----------------------------------------- */

      const sortingItems =
        card.querySelectorAll(
          ".sorting-item"
        );


      sortingItems.forEach(item => {


        /* Select by click */

        item.addEventListener(
          "click",
          () => {

            card
              .querySelectorAll(
                ".sorting-item"
              )
              .forEach(otherItem => {

                otherItem.classList.remove(
                  "selected"
                );

              });


            item.classList.add(
              "selected"
            );


            selectedItem = item;

          }
        );


        /* Keyboard selection */

        item.addEventListener(
          "keydown",
          event => {

            if (
              event.key === "Enter" ||
              event.key === " "
            ) {

              event.preventDefault();

              item.click();
            }

          }
        );


        /* Drag start */

        item.addEventListener(
          "dragstart",
          event => {

            event.dataTransfer.setData(
              "text/plain",
              item.dataset.index
            );


            event.dataTransfer.effectAllowed =
              "move";


            item.classList.add(
              "dragging"
            );

          }
        );


        /* Drag end */

        item.addEventListener(
          "dragend",
          () => {

            item.classList.remove(
              "dragging"
            );

          }
        );

      });


      /* -----------------------------------------
         DROP ZONES
      ----------------------------------------- */

      const dropzones =
        card.querySelectorAll(
          ".sorting-dropzone"
        );


      dropzones.forEach(dropzone => {


        dropzone.addEventListener(
          "dragover",
          event => {

            event.preventDefault();

            event.dataTransfer.dropEffect =
              "move";


            dropzone.classList.add(
              "drag-over"
            );

          }
        );


        dropzone.addEventListener(
          "dragleave",
          () => {

            dropzone.classList.remove(
              "drag-over"
            );

          }
        );


        dropzone.addEventListener(
          "drop",
          event => {

            event.preventDefault();


            dropzone.classList.remove(
              "drag-over"
            );


            const itemIndex =
              event.dataTransfer.getData(
                "text/plain"
              );


            const item =
              card.querySelector(
                `.sorting-item[data-index="${itemIndex}"]`
              );


            moveItemToBucket(
              item,
              dropzone.dataset.bucket
            );

          }
        );

      });


      /* -----------------------------------------
         CLICK "PLACE HERE"
      ----------------------------------------- */

      const placeButtons =
        card.querySelectorAll(
          ".sorting-place-button"
        );


      placeButtons.forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const summary =
              card.querySelector(
                ".sorting-summary"
              );


            if (!selectedItem) {

              summary.className =
                "question-feedback feedback-neutral sorting-summary";


              summary.textContent =
                "Select an item first.";

              return;
            }


            moveItemToBucket(
              selectedItem,
              button.dataset.bucket
            );


            summary.textContent = "";

            summary.className =
              "question-feedback sorting-summary";

          }
        );

      });


      /* -----------------------------------------
         CHECK SORTING ANSWERS
      ----------------------------------------- */

      const checkButton =
        card.querySelector(
          ".sorting-check-button"
        );


      const summary =
        card.querySelector(
          ".sorting-summary"
        );


      checkButton.addEventListener(
        "click",
        () => {

          const allItems =
            card.querySelectorAll(
              ".sorting-item"
            );


          let correctCount = 0;
          let unassignedCount = 0;


          allItems.forEach(item => {

            item.classList.remove(
              "sorting-correct",
              "sorting-incorrect"
            );


            const assignedBucket =
              item.dataset.assignedBucket;


            const correctBucket =
              item.dataset.correctBucket;


            if (!assignedBucket) {

              unassignedCount++;

              return;
            }


            if (
              assignedBucket ===
              correctBucket
            ) {

              correctCount++;


              item.classList.add(
                "sorting-correct"
              );

            }

            else {

              item.classList.add(
                "sorting-incorrect"
              );

            }

          });


          if (unassignedCount > 0) {

            summary.className =
              "question-feedback feedback-neutral sorting-summary";


            summary.textContent =
              `Place all ${selectedItems.length} items into a bucket before checking your answers.`;


            return;
          }


          if (
            correctCount ===
            selectedItems.length
          ) {

            summary.className =
              "question-feedback feedback-correct sorting-summary";


            summary.innerHTML = `
              <strong>Excellent!</strong>
              All ${selectedItems.length} items are correctly classified.
            `;

          }

          else {

            summary.className =
              "question-feedback feedback-incorrect sorting-summary";


            summary.innerHTML = `
              <strong>${correctCount} out of ${selectedItems.length} correct.</strong>
              The highlighted items need another look.
            `;

          }

        }
      );


      section.appendChild(card);

      return;
    }



    /* =========================================
       REGULAR MULTIPLE-CHOICE QUESTION
    ========================================= */

    if (
      question.type === "multiple-choice"
    ) {

      const card =
        document.createElement("article");


      card.className =
        "question-card";


      card.id =
        question.id;


      const choices =
  currentItem.choices ||
  question.choices;

const choicesHTML =
  choices
          .map(
            (
              choice,
              choiceIndex
            ) => `

              <label class="question-choice">

                <input
                  type="radio"
                  name="${question.id}"
                  value="${choiceIndex}"
                >

                <span>
                  ${choice}
                </span>

              </label>

            `
          )
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
        card.querySelector(
          ".check-answer"
        );


      const feedback =
        card.querySelector(
          ".question-feedback"
        );


      button.addEventListener(
        "click",
        () => {

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
            Number(
              selected.value
            );


          if (
            selectedIndex ===
            question.correct
          ) {

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


          /* Render any LaTeX in feedback */

          if (
            window.MathJax &&
            window.MathJax.typesetPromise
          ) {

            MathJax.typesetPromise(
              [feedback]
            );

          }

        }
      );


      section.appendChild(card);
    }

  });


  library.appendChild(section);

});


/* =========================================
   INITIAL MATHJAX RENDER
========================================= */

if (
  window.MathJax &&
  window.MathJax.typesetPromise
) {

  MathJax.typesetPromise(
    [library]
  );

}
