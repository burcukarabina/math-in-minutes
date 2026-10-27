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
   LOGICAL-ORDER QUESTION
========================================= */

if (
  question.type === "logical-order"
) {

  const card =
    document.createElement("article");

  card.className =
    "question-card logical-order-question";

  card.id =
    question.id;


  let displayedItems = [];
  let currentSet = null;


  /* -----------------------------------------
     CHOOSE A SET FROM THE POOL
  ----------------------------------------- */

  function chooseLogicalSet() {

    let newSet;

    if (
      question.pool.length === 1
    ) {

      newSet =
        question.pool[0];

    }

    else {

      do {

        newSet =
          question.pool[
            Math.floor(
              Math.random() *
              question.pool.length
            )
          ];

      } while (
        newSet === currentSet
      );

    }


    currentSet =
      newSet;


    displayedItems =
      shuffleArray(
        currentSet.items
      );

  }


  /* -----------------------------------------
     BUILD ITEMS
  ----------------------------------------- */

  function buildLogicalItemsHTML() {

    return displayedItems
      .map(
        (item, itemIndex) => `

          <div
            class="logical-order-item"
            draggable="true"
            tabindex="0"
            data-id="${item.id}"
            data-rank="${item.rank}"
            data-index="${itemIndex}"
          >

            <span class="logical-order-content">
              ${item.content}
            </span>

          </div>

        `
      )
      .join("");

  }


  /* -----------------------------------------
     RENDER QUESTION
  ----------------------------------------- */

  function renderLogicalOrderQuestion() {

    chooseLogicalSet();


    card.innerHTML = `

      <p class="question-number">
        Question ${index + 1}
      </p>

      <h3>
        ${question.question}
      </h3>

      ${
        currentSet.prompt
          ? `
            <div class="logical-order-prompt">
              ${currentSet.prompt}
            </div>
          `
          : ""
      }

      <div
        class="logical-order-list"
        aria-label="Arrange statements in logical order"
      >

        ${buildLogicalItemsHTML()}

      </div>


      <div class="random-question-actions">

        <button
          type="button"
          class="check-answer logical-order-check-button"
        >
          Check Order
        </button>

        <button
          type="button"
          class="try-another-button logical-order-try-another-button"
        >
          Try Another
        </button>

      </div>


      <div
        class="question-feedback logical-order-feedback"
        aria-live="polite"
      ></div>

    `;


    const list =
      card.querySelector(
        ".logical-order-list"
      );


    const feedback =
      card.querySelector(
        ".logical-order-feedback"
      );


    let draggedItem =
      null;


    /* -----------------------------------------
       DRAG EVENTS
    ----------------------------------------- */

    function attachLogicalDragEvents() {

      const items =
        card.querySelectorAll(
          ".logical-order-item"
        );


      items.forEach(item => {

        item.addEventListener(
          "dragstart",
          event => {

            draggedItem =
              item;

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

            draggedItem =
              null;

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
              rectangle.top +
              rectangle.height / 2;


            if (
              event.clientY <
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


    attachLogicalDragEvents();


    /* -----------------------------------------
       CHECK ORDER
    ----------------------------------------- */

    const checkButton =
      card.querySelector(
        ".logical-order-check-button"
      );


    checkButton.addEventListener(
      "click",
      () => {

        const orderedItems =
          [
            ...card.querySelectorAll(
              ".logical-order-item"
            )
          ];


        let correctCount =
          0;


        orderedItems.forEach(
          (item, position) => {

            item.classList.remove(
              "logical-order-correct",
              "logical-order-incorrect"
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
                "logical-order-correct"
              );

            }

            else {

              item.classList.add(
                "logical-order-incorrect"
              );

            }

          }
        );


        /* -----------------------------------------
           ALL CORRECT
        ----------------------------------------- */

        if (
          correctCount ===
          orderedItems.length
        ) {

          feedback.className =
            "question-feedback feedback-correct logical-order-feedback";


          feedback.innerHTML = `
            <strong>Correct!</strong>
            <span class="logical-order-explanation"></span>
          `;


          const explanationSpan =
            feedback.querySelector(
              ".logical-order-explanation"
            );


          explanationSpan.textContent =
            currentSet.explanation || "";

        }


        /* -----------------------------------------
           SOME INCORRECT
        ----------------------------------------- */

        else {

          const wrongPositions =
            orderedItems
              .map(
                (item, position) => {

                  const rank =
                    Number(
                      item.dataset.rank
                    );


                  return (
                    rank === position + 1
                      ? null
                      : position + 1
                  );

                }
              )
              .filter(
                position =>
                  position !== null
              );


          feedback.className =
            "question-feedback feedback-incorrect logical-order-feedback";


          feedback.innerHTML = `
            <strong>Not quite.</strong>
            ${correctCount} out of ${orderedItems.length}
            statements are in the correct position.
            Reconsider position${wrongPositions.length > 1 ? "s" : ""}
            ${wrongPositions.join(", ")}.
          `;

        }


        renderMath(
          feedback
        );

      }
    );


    /* -----------------------------------------
       TRY ANOTHER
    ----------------------------------------- */

    const tryAnotherButton =
      card.querySelector(
        ".logical-order-try-another-button"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {

        renderLogicalOrderQuestion();

      }
    );


    renderMath(
      card
    );

  }


  renderLogicalOrderQuestion();

  section.appendChild(
    card
  );

  return;
}

      if (question.type === "integral-builder") {

  const card = document.createElement("article");
  card.className = "question-card integral-builder-question";
  card.id = question.id;

  let currentSet = null;

  function chooseBuilderSet() {

    let newSet;

    if (question.pool.length === 1) {
      newSet = question.pool[0];
    } else {
      do {
        newSet =
          question.pool[
            Math.floor(Math.random() * question.pool.length)
          ];
      } while (newSet === currentSet);
    }

    currentSet = newSet;
  }


  function makeOptions(slot, placeholder = "Select") {

  return `
    <option value="">
      ${placeholder}
    </option>

    ${slot.choices
      .map(
        choice => `
          <option value="${choice.value}">
            ${choice.label}
          </option>
        `
      )
      .join("")}
  `;
}


  function renderIntegralBuilder() {

    chooseBuilderSet();

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

      <div class="integral-builder-prompt">
        ${currentSet.prompt}
      </div>


      <div class="integral-builder-expression">

        <span class="integral-builder-prefix">
          A =
        </span>

        <span class="integral-builder-integral">

          <select
            class="integral-builder-select integral-upper"
            data-slot="upper"
            aria-label="Upper bound"
          >
            ${makeOptions(currentSet.builder.upper, "—")}
          </select>

          <span class="integral-symbol">
            ∫
          </span>

          <select
            class="integral-builder-select integral-lower"
            data-slot="lower"
            aria-label="Lower bound"
          >
            ${makeOptions(currentSet.builder.lower, "—")}
          </select>

        </span>


        <span class="integral-builder-parenthesis">
          (
        </span>

        <select
          class="integral-builder-select integral-integrand"
          data-slot="integrand"
          aria-label="Integrand"
        >
          ${makeOptions(currentSet.builder.integrand)}
        </select>

        <span class="integral-builder-parenthesis">
          )
        </span>

        <span class="integral-builder-differential">
          ${currentSet.builder.differential}
        </span>

      </div>


      <div class="random-question-actions">

        <button
          type="button"
          class="check-answer integral-builder-check"
        >
          Check Answer
        </button>

        <button
          type="button"
          class="try-another-button integral-builder-try-another"
        >
          Try Another
        </button>

      </div>


      <div
        class="question-feedback integral-builder-feedback"
        aria-live="polite"
      ></div>
    `;


    const feedback =
      card.querySelector(".integral-builder-feedback");


    const checkButton =
      card.querySelector(".integral-builder-check");


    checkButton.addEventListener("click", () => {

      const lower =
        card.querySelector('[data-slot="lower"]');

      const upper =
        card.querySelector('[data-slot="upper"]');

      const integrand =
        card.querySelector('[data-slot="integrand"]');


      const checks = [

        {
          element: lower,
          correct:
            lower.value ===
            currentSet.builder.lower.correct
        },

        {
          element: upper,
          correct:
            upper.value ===
            currentSet.builder.upper.correct
        },

        {
          element: integrand,
          correct:
            integrand.value ===
            currentSet.builder.integrand.correct
        }

      ];


      checks.forEach(check => {

        check.element.classList.remove(
          "builder-correct",
          "builder-incorrect"
        );

        if (check.correct) {
          check.element.classList.add(
            "builder-correct"
          );
        } else {
          check.element.classList.add(
            "builder-incorrect"
          );
        }

      });


      const correctCount =
        checks.filter(check => check.correct).length;


      if (correctCount === checks.length) {

        feedback.className =
          "question-feedback feedback-correct integral-builder-feedback";

        feedback.innerHTML = `
          <strong>Correct!</strong>
          <span class="integral-builder-explanation"></span>
        `;

        const explanation =
          feedback.querySelector(
            ".integral-builder-explanation"
          );

        explanation.textContent =
          currentSet.explanation;

      } else {

        feedback.className =
          "question-feedback feedback-incorrect integral-builder-feedback";

        feedback.innerHTML = `
          <strong>Not quite.</strong>
          ${correctCount} out of ${checks.length}
          parts are correct.
          Reconsider the highlighted entries.
        `;
      }

      renderMath(feedback);
    });


    const tryAnotherButton =
      card.querySelector(
        ".integral-builder-try-another"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {
        renderIntegralBuilder();
      }
    );


    renderMath(card);
  }


  renderIntegralBuilder();

  section.appendChild(card);

  return;
}

      /* =========================================
   STATEMENT BUILDER
========================================= */

if (question.type === "statement-builder") {

  const card = document.createElement("article");
  card.className = "question-card statement-builder-question";
  card.id = question.id;

  let currentSet = null;
  let answerIds = [];


  function chooseStatementSet() {

    let newSet;

    if (question.pool.length === 1) {

      newSet = question.pool[0];

    } else {

      do {

        newSet =
          question.pool[
            Math.floor(
              Math.random() *
              question.pool.length
            )
          ];

      } while (newSet === currentSet);

    }

    currentSet = newSet;
  }


  function getPieceById(id) {

    return currentSet.pieces.find(
      piece => piece.id === id
    );
  }


  function renderAnswer() {

    const answerArea =
      card.querySelector(
        ".statement-builder-answer"
      );

    if (answerIds.length === 0) {

      answerArea.innerHTML = `
        <span class="statement-builder-placeholder">
          Build your statement here.
        </span>
      `;

    } else {

      answerArea.innerHTML =
        answerIds
          .map(id => {

            const piece =
              getPieceById(id);

            return `
              <span class="statement-answer-piece">
                ${piece.content}
              </span>
            `;

          })
          .join("");
    }

    renderMath(answerArea);
  }


  function renderStatementBuilder() {

    chooseStatementSet();

    answerIds = [];

    const shuffledPieces =
      shuffleArray(currentSet.pieces);


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


      <div class="statement-builder-limit">

        <strong>Limit:</strong>

        <div class="statement-builder-limit-math">
          ${currentSet.prompt}
        </div>

      </div>


      <div class="statement-builder-answer-section">

        <strong>Answer:</strong>

        <div
          class="statement-builder-answer"
          aria-live="polite"
        >
        </div>

      </div>


      <div class="statement-builder-bank">

        <h4>
          Quantifiers and Expressions
        </h4>

        <div class="statement-builder-buttons">

          ${shuffledPieces
            .map(
              piece => `
                <button
                  type="button"
                  class="statement-piece-button"
                  data-piece-id="${piece.id}"
                >
                  ${piece.content}
                </button>
              `
            )
            .join("")}

        </div>

      </div>


      <div class="statement-builder-edit">

        <button
          type="button"
          class="statement-delete-button"
        >
          Delete Last Entry
        </button>

        <button
          type="button"
          class="statement-reset-button"
        >
          Reset
        </button>

      </div>


      <div class="random-question-actions">

        <button
          type="button"
          class="check-answer statement-check-button"
        >
          Check Answer
        </button>

        <button
          type="button"
          class="try-another-button statement-try-another-button"
        >
          Try Another
        </button>

      </div>


      <div
        class="question-feedback statement-builder-feedback"
        aria-live="polite"
      ></div>
    `;


    const feedback =
      card.querySelector(
        ".statement-builder-feedback"
      );


    const pieceButtons =
      card.querySelectorAll(
        ".statement-piece-button"
      );


    pieceButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            button.dataset.pieceId;

          answerIds.push(id);

          button.disabled = true;

          button.classList.add(
            "statement-piece-used"
          );

          feedback.innerHTML = "";

          renderAnswer();
        }
      );
    });


    const deleteButton =
      card.querySelector(
        ".statement-delete-button"
      );


    deleteButton.addEventListener(
      "click",
      () => {

        if (answerIds.length === 0) {
          return;
        }

        const removedId =
          answerIds.pop();

        const restoredButton =
          card.querySelector(
            `[data-piece-id="${removedId}"]`
          );

        if (restoredButton) {

          restoredButton.disabled = false;

          restoredButton.classList.remove(
            "statement-piece-used"
          );
        }

        feedback.innerHTML = "";

        renderAnswer();
      }
    );


    const resetButton =
      card.querySelector(
        ".statement-reset-button"
      );


    resetButton.addEventListener(
      "click",
      () => {

        answerIds = [];

        pieceButtons.forEach(button => {

          button.disabled = false;

          button.classList.remove(
            "statement-piece-used"
          );
        });

        feedback.innerHTML = "";

        renderAnswer();
      }
    );


    const checkButton =
      card.querySelector(
        ".statement-check-button"
      );


    checkButton.addEventListener(
      "click",
      () => {

        const correct =
          answerIds.length ===
            currentSet.correctOrder.length
          &&
          answerIds.every(
            (id, position) =>
              id ===
              currentSet.correctOrder[position]
          );


        if (correct) {

          feedback.className =
            "question-feedback feedback-correct statement-builder-feedback";

          feedback.innerHTML = `
            <strong>Correct!</strong>
            <span class="statement-builder-explanation"></span>
          `;

          const explanation =
            feedback.querySelector(
              ".statement-builder-explanation"
            );

          explanation.textContent =
            currentSet.explanation;

        } else {

          feedback.className =
            "question-feedback feedback-incorrect statement-builder-feedback";

          feedback.innerHTML = `
            <strong>Not quite.</strong>
            Check the quantifiers, the direction of approach,
            and the order of the statements.
          `;
        }

        renderMath(feedback);
      }
    );


    const tryAnotherButton =
      card.querySelector(
        ".statement-try-another-button"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {

        renderStatementBuilder();

      }
    );


    renderAnswer();

    renderMath(card);
  }


  renderStatementBuilder();

  section.appendChild(card);

  return;
}

 /* =========================================
   GRAPH CLICK
========================================= */

if (question.type === "graph-click") {

  const card = document.createElement("article");
  card.className = "question-card graph-click-question";
  card.id = question.id;

  const width = 700;
  const height = 420;

  const padding = {
    left: 55,
    right: 25,
    top: 25,
    bottom: 45
  };

  let currentSet = null;
  let selectedPoints = [];


  function chooseGraphSet() {

    let newSet;

    if (question.pool.length === 1) {

      newSet = question.pool[0];

    } else {

      do {

        newSet =
          question.pool[
            Math.floor(
              Math.random() *
              question.pool.length
            )
          ];

      } while (newSet === currentSet);

    }

    currentSet = newSet;
  }


  function renderGraphQuestion() {

    chooseGraphSet();

    selectedPoints = [];

    const graph = currentSet.graph;


    function xToPixel(x) {

      return (
        padding.left +
        ((x - graph.xMin) /
          (graph.xMax - graph.xMin)) *
        (width - padding.left - padding.right)
      );
    }


    function yToPixel(y) {

      return (
        padding.top +
        ((graph.yMax - y) /
          (graph.yMax - graph.yMin)) *
        (height - padding.top - padding.bottom)
      );
    }


    function pixelToX(px) {

      return (
        graph.xMin +
        ((px - padding.left) /
          (width - padding.left - padding.right)) *
        (graph.xMax - graph.xMin)
      );
    }


    function buildCurvePath() {

      const steps = 700;

      let path = "";
      let drawing = false;

      for (let i = 0; i <= steps; i++) {

        const x =
          graph.xMin +
          (i / steps) *
          (graph.xMax - graph.xMin);

        const y =
          graph.evaluate(x);

        if (
          !Number.isFinite(y) ||
          y < graph.yMin ||
          y > graph.yMax
        ) {

          drawing = false;
          continue;
        }

        const px = xToPixel(x);
        const py = yToPixel(y);

        if (!drawing) {

          path += ` M ${px} ${py}`;

          drawing = true;

        } else {

          path += ` L ${px} ${py}`;

        }
      }

      return path;
    }


    function buildTicks() {

      let html = "";

      /* x-axis ticks */

      for (
        let x = Math.ceil(graph.xMin);
        x <= Math.floor(graph.xMax);
        x++
      ) {

        if (x === 0) {
          continue;
        }

        const px = xToPixel(x);
        const py = yToPixel(0);

        html += `
          <line
            x1="${px}"
            y1="${py - 5}"
            x2="${px}"
            y2="${py + 5}"
            class="graph-click-tick"
          />

          <text
            x="${px}"
            y="${py + 22}"
            text-anchor="middle"
            class="graph-click-label"
          >
            ${x}
          </text>
        `;
      }


      /* y-axis ticks */

      for (
        let y = Math.ceil(graph.yMin);
        y <= Math.floor(graph.yMax);
        y++
      ) {

        if (y === 0) {
          continue;
        }

        const px = xToPixel(0);
        const py = yToPixel(y);

        html += `
          <line
            x1="${px - 5}"
            y1="${py}"
            x2="${px + 5}"
            y2="${py}"
            class="graph-click-tick"
          />

          <text
            x="${px - 12}"
            y="${py + 4}"
            text-anchor="end"
            class="graph-click-label"
          >
            ${y}
          </text>
        `;
      }

      return html;
    }


    card.innerHTML = `

      <p class="question-number">
        Question ${index + 1}
      </p>

      <h3>
        ${currentSet.task}
      </h3>

      <div class="graph-click-formula">
        ${currentSet.formula}
      </div>

      <p class="graph-click-instructions">
        Click on the graph to select points.
        Select all appropriate points before checking your answer.
      </p>


      <div class="graph-click-wrapper">

        <svg
          class="graph-click-svg"
          viewBox="0 0 ${width} ${height}"
          role="img"
          aria-label="Graph of the function"
        >

          <line
            x1="${xToPixel(graph.xMin)}"
            y1="${yToPixel(0)}"
            x2="${xToPixel(graph.xMax)}"
            y2="${yToPixel(0)}"
            class="graph-click-axis"
          />


          <line
            x1="${xToPixel(0)}"
            y1="${yToPixel(graph.yMin)}"
            x2="${xToPixel(0)}"
            y2="${yToPixel(graph.yMax)}"
            class="graph-click-axis"
          />


          ${buildTicks()}


          <path
            d="${buildCurvePath()}"
            class="graph-click-curve"
            fill="none"
          />


          <g class="graph-click-selected-layer">
          </g>

        </svg>

      </div>


      <div class="graph-click-actions">

        <button
          type="button"
          class="graph-click-clear"
        >
          Clear Points
        </button>

        <button
          type="button"
          class="check-answer graph-click-check"
        >
          Check Answer
        </button>

        <button
          type="button"
          class="try-another-button graph-click-try-another"
        >
          Try Another
        </button>

      </div>


      <div
        class="question-feedback graph-click-feedback"
        aria-live="polite"
      ></div>
    `;


    const svg =
      card.querySelector(".graph-click-svg");

    const feedback =
      card.querySelector(".graph-click-feedback");


    function renderSelectedPoints() {

      const layer =
        card.querySelector(
          ".graph-click-selected-layer"
        );

      layer.innerHTML =
        selectedPoints
          .map(
            point => `
              <circle
                cx="${point.px}"
                cy="${point.py}"
                r="8"
                class="graph-click-selected-point"
              />
            `
          )
          .join("");
    }


    svg.addEventListener(
      "click",
      event => {

        const rectangle =
          svg.getBoundingClientRect();

        const scaleX =
          width / rectangle.width;

        const px =
          (event.clientX - rectangle.left) *
          scaleX;

        const x =
          pixelToX(px);

        const y =
          graph.evaluate(x);


        /*
          Ignore clicks whose corresponding
          function value is outside the graph.
        */

        if (
          !Number.isFinite(y) ||
          y < graph.yMin ||
          y > graph.yMax
        ) {
          return;
        }


        selectedPoints.push({
          x,
          y,
          px: xToPixel(x),
          py: yToPixel(y)
        });


        renderSelectedPoints();

        feedback.innerHTML = "";
      }
    );


    const clearButton =
      card.querySelector(
        ".graph-click-clear"
      );

    clearButton.addEventListener(
      "click",
      () => {

        selectedPoints = [];

        renderSelectedPoints();

        feedback.innerHTML = "";
      }
    );


    const checkButton =
      card.querySelector(
        ".graph-click-check"
      );

    checkButton.addEventListener(
      "click",
      () => {

        const tolerance =
          currentSet.tolerance || 0.25;


        let matchedTargets = 0;


        currentSet.targets.forEach(
          target => {

            const match =
              selectedPoints.some(
                point =>
                  Math.abs(
                    point.x - target.x
                  ) <= tolerance
              );

            if (match) {
              matchedTargets++;
            }
          }
        );


        const allTargetsFound =
          matchedTargets ===
          currentSet.targets.length;


        const noExtraPoints =
          selectedPoints.length ===
          currentSet.targets.length;


        if (
          allTargetsFound &&
          noExtraPoints
        ) {

          feedback.className =
            "question-feedback feedback-correct graph-click-feedback";

          feedback.innerHTML = `
            <strong>Correct!</strong>
            <span class="graph-click-explanation"></span>
          `;

          const explanation =
            feedback.querySelector(
              ".graph-click-explanation"
            );

          explanation.textContent =
            currentSet.explanation;

        } else {

          feedback.className =
            "question-feedback feedback-incorrect graph-click-feedback";

          feedback.innerHTML = `
            <strong>Not quite.</strong>
            Reconsider the behaviour of the function near your selected points.
          `;
        }

        renderMath(feedback);
      }
    );


    const tryAnotherButton =
      card.querySelector(
        ".graph-click-try-another"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {

        renderGraphQuestion();

      }
    );


    renderMath(card);
  }


  renderGraphQuestion();

  section.appendChild(card);

  return;
}

      /* =========================================
   FLASHCARDS
========================================= */

if (question.type === "flashcard") {

  const card = document.createElement("article");
  card.className = "question-card flashcard-question";
  card.id = question.id;

  let currentCard = null;
  let showingBack = false;


  function chooseFlashcard() {

    let newCard;

    if (question.pool.length === 1) {

      newCard = question.pool[0];

    } else {

      do {

        newCard =
          question.pool[
            Math.floor(
              Math.random() *
              question.pool.length
            )
          ];

      } while (newCard === currentCard);

    }

    currentCard = newCard;
  }


  function renderFlashcard() {

    chooseFlashcard();

    showingBack = false;


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


     <div
  class="practice-flashcard"
  tabindex="0"
  role="button"
  aria-label="Flashcard. Click to reveal the answer."
>

  <div class="practice-flashcard-inner">

    <div class="practice-flashcard-face practice-flashcard-front">

      <div class="practice-flashcard-label">
        QUESTION
      </div>

      <div class="practice-flashcard-content">
        ${currentCard.front}
      </div>

    </div>


    <div class="practice-flashcard-face practice-flashcard-back">

      <div class="practice-flashcard-label">
        ANSWER
      </div>

      <div class="practice-flashcard-content">
        ${currentCard.back}
      </div>

    </div>

  </div>

</div>


      <div class="flashcard-actions">

        <button
          type="button"
          class="check-answer flashcard-reveal"
        >
          Reveal Answer
        </button>

        <button
          type="button"
          class="try-another-button flashcard-try-another"
        >
          Try Another
        </button>

      </div>
    `;


    const flashcard =
      card.querySelector(".practice-flashcard");

    const revealButton =
      card.querySelector(".flashcard-reveal");


  function toggleFlashcard() {

  showingBack = !showingBack;

  flashcard.classList.toggle(
    "flipped",
    showingBack
  );

  revealButton.textContent =
    showingBack
      ? "Show Question"
      : "Reveal Answer";
}


    flashcard.addEventListener(
      "click",
      toggleFlashcard
    );


    flashcard.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          toggleFlashcard();
        }
      }
    );


    revealButton.addEventListener(
      "click",
      toggleFlashcard
    );


    const tryAnotherButton =
      card.querySelector(
        ".flashcard-try-another"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {

        renderFlashcard();

      }
    );


    renderMath(card);
  }


  renderFlashcard();

  section.appendChild(card);

  return;
}
      /* =========================================
   MATCHING
========================================= */

if (question.type === "matching") {

  const card = document.createElement("article");
  card.className = "question-card matching-question";
  card.id = question.id;

  let currentItems = [];
  let placements = {};


  function chooseMatchingSet() {

    const shuffledPool = shuffleArray(question.pool);

    const chosen = [];
    const usedAnswers = new Set();

    for (const item of shuffledPool) {

      if (!usedAnswers.has(item.right)) {

        chosen.push(item);
        usedAnswers.add(item.right);
      }

      if (
        chosen.length ===
        (question.numberToDraw || 4)
      ) {
        break;
      }
    }

    currentItems = chosen;
  }


  function renderMatchingQuestion() {

    chooseMatchingSet();

    placements = {};


    const shuffledFunctions =
      shuffleArray(currentItems);

    const shuffledDomains =
      shuffleArray(currentItems);


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
            <p class="matching-instructions">
              ${question.instructions}
            </p>
          `
          : ""
      }


      <div class="matching-layout">


        <!-- LEFT COLUMN -->

        <div class="matching-column">

          <h4>
            Functions
          </h4>

          <div
            class="matching-bank"
            data-matching-bank
          >

            ${shuffledFunctions
              .map(
                item => `
                  <div
                    class="matching-item"
                    draggable="true"
                    data-id="${item.id}"
                  >

                    <span class="matching-item-content">
                      ${item.left}
                    </span>

                  </div>
                `
              )
              .join("")}

          </div>

        </div>


        <!-- RIGHT COLUMN -->

        <div class="matching-column">

          <h4>
            Domains
          </h4>

          <div class="matching-target-list">

            ${shuffledDomains
              .map(
                item => `
                  <div
                    class="matching-target"
                    data-answer="${item.right}"
                  >

                    <div class="matching-target-label">
                      ${item.right}
                    </div>

                    <div
                      class="matching-dropzone"
                      data-dropzone
                    >
                    </div>

                  </div>
                `
              )
              .join("")}

          </div>

        </div>


      </div>


      <div class="matching-actions">

        <button
          type="button"
          class="check-answer matching-check"
        >
          Check Answers
        </button>

        <button
          type="button"
          class="try-another-button matching-try-another"
        >
          Try Another Set
        </button>

        <button
          type="button"
          class="matching-reset"
        >
          Reset Cards
        </button>

      </div>


      <div
        class="question-feedback matching-feedback"
        aria-live="polite"
      ></div>
    `;


    const bank =
      card.querySelector(
        "[data-matching-bank]"
      );

    const items =
      card.querySelectorAll(
        ".matching-item"
      );

    const dropzones =
      card.querySelectorAll(
        "[data-dropzone]"
      );

    const feedback =
      card.querySelector(
        ".matching-feedback"
      );


    let draggedItem = null;


    /* =====================================
       DRAG START
    ===================================== */

    items.forEach(item => {

      item.addEventListener(
        "dragstart",
        event => {

          draggedItem = item;

          item.classList.add(
            "matching-dragging"
          );

          event.dataTransfer.effectAllowed =
            "move";

        }
      );


      item.addEventListener(
        "dragend",
        () => {

          item.classList.remove(
            "matching-dragging"
          );

          draggedItem = null;

        }
      );

    });


    /* =====================================
       DROP ZONES
    ===================================== */

    dropzones.forEach(dropzone => {

      dropzone.addEventListener(
        "dragover",
        event => {

          event.preventDefault();

          dropzone.classList.add(
            "matching-drop-active"
          );

        }
      );


      dropzone.addEventListener(
        "dragleave",
        () => {

          dropzone.classList.remove(
            "matching-drop-active"
          );

        }
      );


      dropzone.addEventListener(
        "drop",
        event => {

          event.preventDefault();

          dropzone.classList.remove(
            "matching-drop-active"
          );


          if (!draggedItem) {
            return;
          }


          /*
            If this target already contains
            a card, move that card back
            to the function bank.
          */

          const existing =
            dropzone.querySelector(
              ".matching-item"
            );

          if (
            existing &&
            existing !== draggedItem
          ) {

            bank.appendChild(existing);

            delete placements[
              existing.dataset.id
            ];
          }


          dropzone.appendChild(
            draggedItem
          );


          const target =
            dropzone.closest(
              ".matching-target"
            );


          placements[
            draggedItem.dataset.id
          ] =
            target.dataset.answer;


          feedback.innerHTML = "";

        }
      );

    });


    /* =====================================
       ALLOW CARDS TO RETURN TO BANK
    ===================================== */

    bank.addEventListener(
      "dragover",
      event => {

        event.preventDefault();

      }
    );


    bank.addEventListener(
      "drop",
      event => {

        event.preventDefault();


        if (!draggedItem) {
          return;
        }


        bank.appendChild(
          draggedItem
        );


        delete placements[
          draggedItem.dataset.id
        ];


        feedback.innerHTML = "";

      }
    );


    /* =====================================
       CHECK ANSWERS
    ===================================== */

    const checkButton =
      card.querySelector(
        ".matching-check"
      );


    checkButton.addEventListener(
      "click",
      () => {

        let correctCount = 0;


        currentItems.forEach(item => {

          const placedAnswer =
            placements[item.id];


          const itemElement =
            card.querySelector(
              `.matching-item[data-id="${item.id}"]`
            );


          itemElement.classList.remove(
            "matching-correct",
            "matching-incorrect"
          );


          if (
            placedAnswer === item.right
          ) {

            correctCount++;

            itemElement.classList.add(
              "matching-correct"
            );

          } else {

            itemElement.classList.add(
              "matching-incorrect"
            );

          }

        });


        if (
          correctCount ===
          currentItems.length
        ) {

          feedback.className =
            "question-feedback feedback-correct matching-feedback";

          feedback.innerHTML = `
            <strong>Correct!</strong>
            All functions are matched with their domains.
          `;

        } else {

          feedback.className =
            "question-feedback feedback-incorrect matching-feedback";

          feedback.innerHTML = `
            <strong>${correctCount} of ${currentItems.length} correct.</strong>
            Recheck the domain restrictions for the highlighted cards.
          `;

        }

      }
    );


    /* =====================================
       RESET
    ===================================== */

    const resetButton =
      card.querySelector(
        ".matching-reset"
      );


    resetButton.addEventListener(
      "click",
      () => {

        placements = {};


        card
          .querySelectorAll(
            ".matching-item"
          )
          .forEach(item => {

            item.classList.remove(
              "matching-correct",
              "matching-incorrect"
            );

            bank.appendChild(item);

          });


        feedback.className =
          "question-feedback matching-feedback";

        feedback.innerHTML = "";

      }
    );


    /* =====================================
       TRY ANOTHER SET
    ===================================== */

    const tryAnotherButton =
      card.querySelector(
        ".matching-try-another"
      );


    tryAnotherButton.addEventListener(
      "click",
      () => {

        renderMatchingQuestion();

      }
    );


    renderMath(card);
  }


  renderMatchingQuestion();

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
         RANDOMIZED MULTI SELECT
      ========================================= */

      if (question.type === "randomized-multi-select") {

  const card = document.createElement("article");
  card.className = "question-card randomized-multi-select-question";
  card.id = question.id;

  let displayedItems = [];

  function chooseItems() {
    displayedItems = shuffleArray(question.pool)
      .slice(0, question.numberToDraw || 4);
  }

  function renderMultiSelectQuestion() {

    chooseItems();

    card.innerHTML = `
      <p class="question-number">
        Question ${index + 1}
      </p>

      <h3>
        ${question.question}
      </h3>

      ${
        question.instructions
          ? `<p class="sorting-instructions">${question.instructions}</p>`
          : ""
      }

      <div class="multi-select-options">

        ${displayedItems
          .map(
            (item, itemIndex) => `
              <label class="multi-select-option">
                <input
                  type="checkbox"
                  value="${itemIndex}"
                >

                <span class="multi-select-content">
                  ${item.content}
                </span>
              </label>
            `
          )
          .join("")}

      </div>

      <div class="random-question-actions">

        <button
          type="button"
          class="check-answer multi-select-check-button"
        >
          Check Answer
        </button>

        <button
          type="button"
          class="try-another-button multi-select-try-another-button"
        >
          Try Another
        </button>

      </div>

      <div
        class="question-feedback multi-select-feedback"
        aria-live="polite"
      ></div>
    `;

    const feedback =
      card.querySelector(".multi-select-feedback");

    const checkButton =
      card.querySelector(".multi-select-check-button");

    checkButton.addEventListener("click", () => {

      const checkboxes =
        [...card.querySelectorAll('input[type="checkbox"]')];

      let correctCount = 0;

      checkboxes.forEach((checkbox, itemIndex) => {

        const selected = checkbox.checked;
        const shouldBeSelected =
          displayedItems[itemIndex].correct;

        const option =
          checkbox.closest(".multi-select-option");

        option.classList.remove(
          "multi-select-correct",
          "multi-select-incorrect"
        );

        if (selected === shouldBeSelected) {
          correctCount++;
          option.classList.add("multi-select-correct");
        } else {
          option.classList.add("multi-select-incorrect");
        }
      });

      if (correctCount === displayedItems.length) {

        feedback.className =
          "question-feedback feedback-correct multi-select-feedback";

        feedback.innerHTML = `
          <strong>Correct!</strong>
          <div class="multi-select-explanations">
            ${displayedItems
              .map(
                item => `
                  <p>
                    ${item.content}<br>
                    ${item.explanation}
                  </p>
                `
              )
              .join("")}
          </div>
        `;

      } else {

        feedback.className =
          "question-feedback feedback-incorrect multi-select-feedback";

        feedback.innerHTML = `
          <strong>Not quite.</strong>
          Review the highlighted choices and try again.
        `;
      }

      renderMath(feedback);
    });

    const tryAnotherButton =
      card.querySelector(".multi-select-try-another-button");

    tryAnotherButton.addEventListener("click", () => {
      renderMultiSelectQuestion();
    });

    renderMath(card);
  }

  renderMultiSelectQuestion();

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
