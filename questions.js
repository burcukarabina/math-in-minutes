const questions = [
  {
    course: "calculus-2",
    section: "Test",
    id: "test-question",
    type: "multiple-choice",

    question:
      "Which number is equal to \\(2+2\\)?",

    choices: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],

    correct: 1,

    explanation:
      "\\(2+2=4\\)."
  },{
  course: "calculus-1",
  section: "Sequence Limits",
  id: "proof-order-sequence-limits",
  type: "logical-order",

  question:
    "Arrange the following statements in a logical order to complete the argument.",

  pool: [

    /* =====================================
       PROOF 1
       SQUEEZE THEOREM
    ===================================== */

    {
      prompt:
        "Assume \\(a_n\\le b_n\\le c_n\\) for \\(n \\gt M\\), and \\(\\displaystyle\\lim_{n\\to\\infty}a_n=L=\\displaystyle\\lim_{n\\to\\infty}c_n\\). Prove that \\(\\displaystyle\\lim_{n\\to\\infty}b_n=L\\).",

      items: [
        {
          id: "A",
          content:
            "Let \\(\\varepsilon \\gt 0\\) be given.",
          rank: 1
        },

        {
          id: "B",
          content:
            "Since \\(a_n\\to L\\) and \\(c_n\\to L\\), choose \\(N \\gt M\\) such that if \\(n \\gt N\\), then \\(a_n,c_n\\in(L-\\varepsilon,L+\\varepsilon)\\).",
          rank: 2
        },

        {
          id: "C",
          content:
            "For \\(n \\gt N\\), we have \\(L-\\varepsilon \\lt a_n\\le b_n\\le c_n \\lt L+\\varepsilon\\).",
          rank: 3
        },

        {
          id: "D",
          content:
            "Therefore \\(b_n\\in(L-\\varepsilon,L+\\varepsilon)\\) whenever \\(n\\gtN\\).",
          rank: 4
        },

        {
          id: "E",
          content:
            "Hence \\(\\displaystyle\\lim_{n\\to\\infty}b_n=L\\).",
          rank: 5
        }
      ],

      explanation:
        "The proof places the tail of \\(b_n\\) inside the same epsilon-neighbourhood of \\(L\\) as the two bounding sequences."
    },


    /* =====================================
       ARGUMENT 2
       sin(n)/n
    ===================================== */

    {
      prompt:
        "Use the Squeeze Theorem to show that \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin n}{n}=0\\).",

      items: [
        {
          id: "A",
          content:
            "For every \\(n\\in\\mathbb{N}\\), \\(-1\\le\\sin n\\le1\\).",
          rank: 1
        },

        {
          id: "B",
          content:
            "Since \\(n\\gt0\\), divide through by \\(n\\) to obtain \\(-\\frac1n\\le\\frac{\\sin n}{n}\\le\\frac1n\\).",
          rank: 2
        },

        {
          id: "C",
          content:
            "We have \\(\\displaystyle\\lim_{n\\to\\infty}-\\frac1n=0\\) and \\(\\displaystyle\\lim_{n\\to\\infty}\\frac1n=0\\).",
          rank: 3
        },

        {
          id: "D",
          content:
            "By the Squeeze Theorem, \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin n}{n}=0\\).",
          rank: 4
        }
      ],

      explanation:
        "The sequence is squeezed between two sequences that both converge to zero."
    },


    /* =====================================
       PROOF 3
       MONOTONE CONVERGENCE THEOREM
    ===================================== */

    {
      prompt:
        "Suppose \\(\\{a_n\\}\\) is increasing and bounded above. Show that \\(a_n\\to L\\), where \\(L=\\operatorname{lub}(\\{a_n\\})\\).",

      items: [
        {
          id: "A",
          content:
            "Let \\(L=\\operatorname{lub}(\\{a_n\\})\\) and let \\(\\varepsilon\\gt0\\) be given.",
          rank: 1
        },

        {
          id: "B",
          content:
            "Since \\(L-\\varepsilon\\ltL\\), the number \\(L-\\varepsilon\\) is not an upper bound for \\(\\{a_n\\}\\).",
          rank: 2
        },

        {
          id: "C",
          content:
            "Therefore there exists \\(M\\in\\mathbb{N}\\) such that \\(L-\\varepsilon\\lta_M\\).",
          rank: 3
        },

        {
          id: "D",
          content:
            "Since \\(\\{a_n\\}\\) is increasing and \\(L\\) is an upper bound, for \\(n\\gtM\\) we have \\(L-\\varepsilon\\lta_M\\le a_n\\le L\\).",
          rank: 4
        },

        {
          id: "E",
          content:
            "Thus \\(L-\\varepsilon\\lta_n\\ltL+\\varepsilon\\) whenever \\(n\\gtM\\).",
          rank: 5
        },

        {
          id: "F",
          content:
            "Hence \\(\\displaystyle\\lim_{n\\to\\infty}a_n=L\\).",
          rank: 6
        }
      ],

      explanation:
        "The least-upper-bound property provides one term above \\(L-\\varepsilon\\), and monotonicity keeps every later term between \\(L-\\varepsilon\\) and \\(L\\)."
    }

  ]
}
];
