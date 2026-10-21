const library = document.getElementById("practice-library");

const practiceQuestions = questions;

const sections = [
  ...new Set(
    practiceQuestions.map(q => q.section)
  )
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
   HELPER: RENDER MATHJAX
========================================= */

function renderMath(element) {

  if (
    window.MathJax &&
    window.MathJax.typesetPromise
  ) {

    MathJax.typesetPromise([element]);

  }
}


/* =========================================
   BUILD SECTIONS
========================================= */

sections.forEach(sectionName => {

  const section =
    document.createElement("section");

  section.className =
    "practice-section";


  const heading =
    document.createElement("h2");

  heading.textContent =
    sectionName;

  section.appendChild(heading);


  const sectionQuestions =
    practiceQuestions.filter(
      question =>
        question.section === sectionName
    );


  sectionQuestions.forEach(
    (question, index) => {


      /* =========================================
         SORTING BUCKET QUESTION
      ========================================= */

      if (
        question.type === "sorting-bucket" ||
        question.type === "integration-method-bucket" ||
        question.type === "classification-bucket"
      ) {

        const bucketNames =
          question.buckets ||
          question.methods ||
          [];


        const card =
          document.createElement("article");

        card.className =
          "question-card sorting-question";

        card.id =
          question.id;


        let selectedItem = null;

        let selectedItems =
          shuffleArray(question.pool)
            .slice(
              0,
              question.numberToDraw
            );


        /* -----------------------------------------
           BUILD ITEMS HTML
        ----------------------------------------- */

        function buildItemsHTML() {

          return selectedItems
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

        }


        /* -----------------------------------------
           BUILD BUCKETS HTML
        ----------------------------------------- */

        const bucketsHTML =
          bucketNames
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
              ${buildItemsHTML()}
            </div>

          </div>


          <div class="sorting-buckets">
            ${bucketsHTML}
          </div>


          <div class="random-question-actions">

            <button
              type="button"
              class="check-answer sorting-check-button"
            >
              Check Answers
            </button>

            <button
              type="button"
              class="try-another-button sorting-try-another-button"
            >
              Try Another
            </button>

          </div>


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
           ATTACH EVENTS TO SORTING ITEMS
        ----------------------------------------- */

        function attachSortingItemEvents() {

          const sortingItems =
            card.querySelectorAll(
              ".sorting-item"
            );


          sortingItems.forEach(item => {

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


            item.addEventListener(
              "dragend",
              () => {

                item.classList.remove(
                  "dragging"
                );

              }
            );

          });

        }


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

        card
          .querySelectorAll(
            ".sorting-place-button"
          )
          .forEach(button => {

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


        const tryAnotherButton =
          card.querySelector(
            ".sorting-try-another-button"
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


        /* -----------------------------------------
           TRY ANOTHER SORTING SET
        ----------------------------------------- */

        tryAnotherButton.addEventListener(
          "click",
          () => {

            selectedItems =
              shuffleArray(question.pool)
                .slice(
                  0,
                  question.numberToDraw
                );


            const itemContainer =
              card.querySelector(
                ".sorting-item-container"
              );


            itemContainer.innerHTML =
              buildItemsHTML();


            card
              .querySelectorAll(
                ".sorting-dropzone"
              )
              .forEach(dropzone => {

                dropzone.innerHTML = "";

              });


            selectedItem = null;


            summary.textContent = "";

            summary.className =
              "question-feedback sorting-summary";


            attachSortingItemEvents();

            renderMath(card);

          }
        );


        attachSortingItemEvents();

        section.appendChild(card);

        renderMath(card);

        return;
      }



      /* =========================================
         TWO-STAGE CLASSIFICATION
      ========================================= */

      if (
        question.type ===
        "two-stage-classification"
      ) {

        const card =
          document.createElement("article");

        card.className =
          "question-card two-stage-question";

        card.id =
          question.id;


        let selectedItems =
          shuffleArray(question.pool)
            .slice(
              0,
              question.numberToDraw
            );


        /* -----------------------------------------
           BUILD SELECT OPTIONS
        ----------------------------------------- */

        function buildOptions(
          choices
        ) {

          return `
            <option value="">
              Choose...
            </option>

            ${choices
              .map(
                choice => `
                  <option value="${choice}">
                    ${choice}
                  </option>
                `
              )
              .join("")}
          `;

        }


        /* -----------------------------------------
           BUILD PART I ROWS
        ----------------------------------------- */

        function buildStage1Rows() {

          return selectedItems
            .map(
              (item, itemIndex) => `

                <div
                  class="two-stage-row"
                  data-index="${itemIndex}"
                >

                  <div class="two-stage-integral">
                    ${item.content}
                  </div>

                  <div class="two-stage-answer">

                    <select
                      class="two-stage-select stage1-select"
                      data-index="${itemIndex}"
                      aria-label="Part I answer for integral ${itemIndex + 1}"
                    >
                      ${buildOptions(
                        question.stage1.choices
                      )}
                    </select>

                  </div>

                </div>

              `
            )
            .join("");

        }


        /* -----------------------------------------
           BUILD PART II ROWS
        ----------------------------------------- */

        function buildStage2Rows() {

          return selectedItems
            .map(
              (item, itemIndex) => `

                <div
                  class="two-stage-row"
                  data-index="${itemIndex}"
                >

                  <div class="two-stage-integral">
                    ${item.content}
                  </div>

                  <div class="two-stage-answer">

                    <select
                      class="two-stage-select stage2-select"
                      data-index="${itemIndex}"
                      aria-label="Part II answer for integral ${itemIndex + 1}"
                    >
                      ${buildOptions(
                        question.stage2.choices
                      )}
                    </select>

                  </div>

                </div>

              `
            )
            .join("");

        }


        /* -----------------------------------------
           RENDER TWO-STAGE QUESTION
        ----------------------------------------- */

        function renderTwoStageQuestion() {

          card.innerHTML = `

            <p class="question-number">
              Question ${index + 1}
            </p>

            <h3>
              ${question.question}
            </h3>


            <!-- ===============================
                 PART I
            ================================ -->

            <div class="two-stage-part stage1-part">

              <h4 class="two-stage-heading">
                ${question.stage1.label}
              </h4>

              <div class="two-stage-table">

                <div class="two-stage-header">

                  <div>
                    Integral
                  </div>

                  <div>
                    ${question.stage1.columnLabel || "Type"}
                  </div>

                </div>

                ${buildStage1Rows()}

              </div>


              <button
                type="button"
                class="check-answer stage1-check-button"
              >
                Check Part I
              </button>


              <div
                class="question-feedback stage1-feedback"
                aria-live="polite"
              ></div>

            </div>


            <!-- ===============================
                 PART II
            ================================ -->

            <div
              class="two-stage-part stage2-part"
              hidden
            >

              <h4 class="two-stage-heading">
                ${question.stage2.label}
              </h4>

              <div class="two-stage-table">

                <div class="two-stage-header">

                  <div>
                    Integral
                  </div>

                  <div>
                    ${question.stage2.columnLabel || "Behavior"}
                  </div>

                </div>

                ${buildStage2Rows()}

              </div>


              <div class="random-question-actions">

                <button
                  type="button"
                  class="check-answer stage2-check-button"
                >
                  Check Part II
                </button>

                <button
                  type="button"
                  class="try-another-button two-stage-try-another-button"
                >
                  Try Another
                </button>

              </div>


              <div
                class="question-feedback stage2-feedback"
                aria-live="polite"
              ></div>

            </div>

          `;


          const stage1Button =
            card.querySelector(
              ".stage1-check-button"
            );


          const stage2Button =
            card.querySelector(
              ".stage2-check-button"
            );


          const tryAnotherButton =
            card.querySelector(
              ".two-stage-try-another-button"
            );


          const stage1Feedback =
            card.querySelector(
              ".stage1-feedback"
            );


          const stage2Feedback =
            card.querySelector(
              ".stage2-feedback"
            );


          const stage2Part =
            card.querySelector(
              ".stage2-part"
            );


          /* -----------------------------------------
             CHECK PART I
          ----------------------------------------- */

          stage1Button.addEventListener(
            "click",
            () => {

              const selects =
                card.querySelectorAll(
                  ".stage1-select"
                );


              let unanswered = 0;
              let correctCount = 0;


              selects.forEach(select => {

                select.classList.remove(
                  "two-stage-correct",
                  "two-stage-incorrect"
                );


                const itemIndex =
                  Number(
                    select.dataset.index
                  );


                const item =
                  selectedItems[
                    itemIndex
                  ];


                const selectedAnswer =
                  select.value;


                const correctAnswer =
                  item.answers[
                    question.stage1.key
                  ];


                if (!selectedAnswer) {

                  unanswered++;

                  return;
                }


                if (
                  selectedAnswer ===
                  correctAnswer
                ) {

                  correctCount++;

                  select.classList.add(
                    "two-stage-correct"
                  );

                }

                else {

                  select.classList.add(
                    "two-stage-incorrect"
                  );

                }

              });


              if (unanswered > 0) {

                stage1Feedback.className =
                  "question-feedback feedback-neutral stage1-feedback";

                stage1Feedback.textContent =
                  "Please answer every item before checking Part I.";

                return;
              }


              if (
                correctCount ===
                selectedItems.length
              ) {

                stage1Feedback.className =
                  "question-feedback feedback-correct stage1-feedback";

                stage1Feedback.innerHTML = `
                  <strong>Part I complete!</strong>
                  All ${selectedItems.length} classifications are correct.
                `;

              }

              else {

                stage1Feedback.className =
                  "question-feedback feedback-incorrect stage1-feedback";

                stage1Feedback.innerHTML = `
                  <strong>${correctCount} out of ${selectedItems.length} correct.</strong>
                  Review the highlighted classifications.
                `;

              }


              /*
                Reveal Part II after the student
                has answered and checked all Part I items.
              */

              stage2Part.hidden =
                false;


              renderMath(stage2Part);

            }
          );


          /* -----------------------------------------
             CHECK PART II
          ----------------------------------------- */

          stage2Button.addEventListener(
            "click",
            () => {

              const selects =
                card.querySelectorAll(
                  ".stage2-select"
                );


              let unanswered = 0;
              let correctCount = 0;


              selects.forEach(select => {

                select.classList.remove(
                  "two-stage-correct",
                  "two-stage-incorrect"
                );


                const itemIndex =
                  Number(
                    select.dataset.index
                  );


                const item =
                  selectedItems[
                    itemIndex
                  ];


                const selectedAnswer =
                  select.value;


                const correctAnswer =
                  item.answers[
                    question.stage2.key
                  ];


                if (!selectedAnswer) {

                  unanswered++;

                  return;
                }


                if (
                  selectedAnswer ===
                  correctAnswer
                ) {

                  correctCount++;

                  select.classList.add(
                    "two-stage-correct"
                  );

                }

                else {

                  select.classList.add(
                    "two-stage-incorrect"
                  );

                }

              });


              if (unanswered > 0) {

                stage2Feedback.className =
                  "question-feedback feedback-neutral stage2-feedback";

                stage2Feedback.textContent =
                  "Please answer every item before checking Part II.";

                return;
              }


              if (
                correctCount ===
                selectedItems.length
              ) {

                stage2Feedback.className =
                  "question-feedback feedback-correct stage2-feedback";

                stage2Feedback.innerHTML = `
                  <strong>Excellent!</strong>
                  All ${selectedItems.length} convergence classifications are correct.
                `;

              }

              else {

                stage2Feedback.className =
                  "question-feedback feedback-incorrect stage2-feedback";

                stage2Feedback.innerHTML = `
                  <strong>${correctCount} out of ${selectedItems.length} correct.</strong>
                  Review the highlighted answers.
                `;

              }

            }
          );


          /* -----------------------------------------
             TRY ANOTHER TWO-STAGE SET
          ----------------------------------------- */

          tryAnotherButton.addEventListener(
            "click",
            () => {

              selectedItems =
                shuffleArray(
                  question.pool
                )
                .slice(
                  0,
                  question.numberToDraw
                );


              renderTwoStageQuestion();

            }
          );


          renderMath(card);

        }


        renderTwoStageQuestion();

        section.appendChild(card);

        return;
      }

/* =========================================
   DRAG-ORDER QUESTION
========================================= */

if (
  question.type === "drag-order"
) {

  const card =
    document.createElement("article");

  card.className =
    "question-card drag-order-question";

  card.id =
    question.id;


  let displayedItems = [];
let currentSet = null;


  /* -----------------------------------------
     SHUFFLE THE ITEMS
  ----------------------------------------- */

  function prepareItems() {

  let newSet;

  if (question.pool.length === 1) {

    newSet = question.pool[0];

  } else {

    do {

      newSet =
        question.pool[
          Math.floor(
            Math.random() * question.pool.length
          )
        ];

    } while (
      newSet === currentSet
    );

  }

  currentSet = newSet;

  displayedItems =
    shuffleArray(
      currentSet.items
    );
}


  /* -----------------------------------------
     BUILD ITEM CARDS
  ----------------------------------------- */

  function buildItemsHTML() {

    return displayedItems
      .map((item, itemIndex) => `

        <div
          class="drag-order-item"
          draggable="true"
          tabindex="0"
          data-id="${item.id}"
          data-rank="${item.rank}"
          data-index="${itemIndex}"
        >

          <span class="drag-order-grip">
            ↕
          </span>

          <span class="drag-order-content">
            ${item.content}
          </span>

        </div>

      `)
      .join("");

  }


  /* -----------------------------------------
     RENDER QUESTION
  ----------------------------------------- */

  function renderDragOrderQuestion() {

    prepareItems();


    card.innerHTML = `

      <p class="question-number">
        Question ${index + 1}
      </p>

      <h3>
        ${question.question}
      </h3>
  
    ${currentSet.prompt
    ? `<div class="random-question-content">${currentSet.prompt}</div>`
    : ""
     }

      <div class="drag-order-labels">

        <span>
          Smallest
        </span>

        <span>
          Largest
        </span>

      </div>


      <div
        class="drag-order-list"
        aria-label="Drag items into increasing order"
      >

        ${buildItemsHTML()}

      </div>


      <div class="random-question-actions">

        <button
          type="button"
          class="check-answer drag-order-check-button"
        >
          Check Order
        </button>

        <button
          type="button"
          class="try-another-button drag-order-try-another-button"
        >
          Try Another
        </button>

      </div>


      <div
        class="question-feedback drag-order-feedback"
        aria-live="polite"
      ></div>

    `;


    const list =
      card.querySelector(
        ".drag-order-list"
      );


    const feedback =
      card.querySelector(
        ".drag-order-feedback"
      );


    let draggedItem = null;


    /* -----------------------------------------
       DRAG EVENTS
    ----------------------------------------- */

    function attachDragEvents() {

      const items =
        card.querySelectorAll(
          ".drag-order-item"
        );


      items.forEach(item => {


        item.addEventListener(
          "dragstart",
          event => {

            draggedItem = item;

            item.classList.add(
              "dragging"
            );

            event.dataTransfer.effectAllowed =
              "move";

          }
        );


        item.addEventListener(
          "dragend",
          () => {

            item.classList.remove(
              "dragging"
            );

            draggedItem = null;

          }
        );


        item.addEventListener(
          "dragover",
          event => {

            event.preventDefault();

            if (
              !draggedItem ||
              draggedItem === item
            ) {
              return;
            }


            const rectangle =
              item.getBoundingClientRect();


            const midpoint =
              rectangle.left +
              rectangle.width / 2;


            if (
              event.clientX <
              midpoint
            ) {

              list.insertBefore(
                draggedItem,
                item
              );

            }

            else {

              list.insertBefore(
                draggedItem,
                item.nextSibling
              );

            }

          }
        );

      });

    }


    attachDragEvents();


    /* -----------------------------------------
       CHECK ORDER
    ----------------------------------------- */

    const checkButton =
      card.querySelector(
        ".drag-order-check-button"
      );


    checkButton.addEventListener(
      "click",
      () => {

        const orderedItems =
          [
            ...card.querySelectorAll(
              ".drag-order-item"
            )
          ];


        let correctCount = 0;


        orderedItems.forEach(
          (item, position) => {

            item.classList.remove(
              "drag-order-correct",
              "drag-order-incorrect"
            );


            const rank =
              Number(
                item.dataset.rank
              );


            if (
              rank ===
              position + 1
            ) {

              correctCount++;

              item.classList.add(
                "drag-order-correct"
              );

            }

            else {

              item.classList.add(
                "drag-order-incorrect"
              );

            }

          }
        );


        if (
  correctCount ===
  orderedItems.length
) {

  feedback.className =
    "question-feedback feedback-correct drag-order-feedback";

  feedback.innerHTML = `
    <strong>Correct!</strong>
    <span class="drag-order-explanation"></span>
  `;

  const explanationSpan =
    feedback.querySelector(
      ".drag-order-explanation"
    );

  explanationSpan.textContent =
    currentSet.explanation || "";

}

        else {

  feedback.className =
    "question-feedback feedback-incorrect drag-order-feedback";

  const wrongPositions =
    orderedItems
      .map((item, position) => {

        const rank =
          Number(item.dataset.rank);

        return rank === position + 1
          ? null
          : position + 1;

      })
      .filter(position => position !== null);


  feedback.innerHTML = `
    <strong>Not quite.</strong>
    ${correctCount} out of ${orderedItems.length} positions are correct.
    Reconsider position${wrongPositions.length > 1 ? "s" : ""}
    ${wrongPositions.join(", ")}.
  `;

}


        renderMath(feedback);

      }
    );


    /* -----------------------------------------
       TRY ANOTHER
    ----------------------------------------- */

    const tryAnotherButton =
      card.querySelector(
        ".drag-order-try-another-button"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {

        renderDragOrderQuestion();

      }
    );


    renderMath(card);

  }


  renderDragOrderQuestion();

  section.appendChild(card);

  return;
}

      /* =========================================
         RANDOMIZED MULTIPLE CHOICE
      ========================================= */

      if (
        question.type ===
        "randomized-multiple-choice"
      ) {

        const card =
          document.createElement("article");

        card.className =
          "question-card";

        card.id =
          question.id;


        let currentItem = null;


        function chooseRandomItem() {

          let newItem;


          if (
            question.pool.length === 1
          ) {

            newItem =
              question.pool[0];

          }

          else {

            do {

              newItem =
                question.pool[
                  Math.floor(
                    Math.random() *
                    question.pool.length
                  )
                ];

            } while (
              newItem === currentItem
            );

          }


          currentItem = newItem;
        }


        function renderRandomQuestion() {

          chooseRandomItem();


          const choices =
            currentItem.choices ||
            question.choices ||
            [];


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

            <div class="random-question-content">
              ${currentItem.content}
            </div>

            <div class="question-choices">
              ${choicesHTML}
            </div>

            <div class="random-question-actions">

              <button
                class="check-answer randomized-check-button"
                type="button"
              >
                Check Answer
              </button>

              <button
                class="try-another-button"
                type="button"
              >
                Try Another
              </button>

            </div>

            <div
              class="question-feedback"
              aria-live="polite"
            ></div>

          `;


          const checkButton =
            card.querySelector(
              ".randomized-check-button"
            );


          const tryAnotherButton =
            card.querySelector(
              ".try-another-button"
            );


          const feedback =
            card.querySelector(
              ".question-feedback"
            );


          checkButton.addEventListener(
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
                currentItem.correct
              ) {

                feedback.className =
                  "question-feedback feedback-correct";

                feedback.innerHTML = `
                  <strong>Correct!</strong>
                  ${currentItem.explanation}
                `;

              }

              else {

                feedback.className =
                  "question-feedback feedback-incorrect";

                feedback.innerHTML = `
                  <strong>Not quite.</strong>
                  ${currentItem.explanation}
                `;

              }


              renderMath(feedback);

            }
          );


          tryAnotherButton.addEventListener(
            "click",
            () => {

              renderRandomQuestion();

            }
          );


          renderMath(card);
        }


        renderRandomQuestion();

        section.appendChild(card);

        return;
      }



      /* =========================================
         REGULAR MULTIPLE CHOICE
      ========================================= */

      if (
        question.type ===
        "multiple-choice"
      ) {

        const card =
          document.createElement("article");


        card.className =
          "question-card";

        card.id =
          question.id;


        const choicesHTML =
          question.choices
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


            renderMath(feedback);

          }
        );


        section.appendChild(card);

        renderMath(card);

        return;
      }

    }
  );


  library.appendChild(section);

});


/* =========================================
   INITIAL MATHJAX RENDER
========================================= */

renderMath(library);
