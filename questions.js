const questions = [
 {
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
            "Let \\(\\varepsilon > 0\\) be given.",
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
            "Therefore \\(b_n\\in(L-\\varepsilon,L+\\varepsilon)\\) whenever \\(n > N\\).",
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
            "Let \\(L=\\operatorname{lub}(\\{a_n\\})\\) and let \\(\\varepsilon>0\\) be given.",
          rank: 1
        },

        {
          id: "B",
          content:
            "Since \\(L-\\varepsilon < L\\), the number \\(L-\\varepsilon\\) is not an upper bound for \\(\\{a_n\\}\\).",
          rank: 2
        },

        {
          id: "C",
          content:
            "Therefore there exists \\(M\\in\\mathbb{N}\\) such that \\(L-\\varepsilon < a_M\\).",
          rank: 3
        },

        {
          id: "D",
          content:
            "Since \\(\\{a_n\\}\\) is increasing and \\(L\\) is an upper bound, for \\(n > M\\) we have \\(L-\\varepsilon < a_M\\le a_n\\le L\\).",
          rank: 4
        },

        {
          id: "E",
          content:
            "Thus \\(L-\\varepsilon \\lt a_n \\lt L+ \\varepsilon\\) whenever \\(n > M\\).",
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
},
 {
  course: "calculus-2",
  section: "Riemann Sums",
  id: "definite-integral-to-riemann-sum",
  type: "randomized-multiple-choice",

  question:
    "Express the following definite integral as a limit of a Riemann sum using right-hand endpoints.",

  pool: [

    /* =====================================
       QUESTION 1
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^2 x^2\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\frac{2i}{n}\\right)^2\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\frac{i}{n}\\right)^2\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\frac{2i}{n}\\right)^2\\frac{1}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(2+\\frac{2i}{n}\\right)^2\\frac{2}{n}\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(a=0\\), \\(b=2\\), so \\(\\Delta x=\\frac{2}{n}\\). Using right-hand endpoints, \\(x_i=0+i\\Delta x=\\frac{2i}{n}\\). Therefore the Riemann sum is \\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\frac{2i}{n}\\right)^2\\frac{2}{n}\\)."
    },


    /* =====================================
       QUESTION 2
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^4 x^3\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(1+\\frac{3i}{n}\\right)^3\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(1+\\frac{4i}{n}\\right)^3\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\frac{3i}{n}\\right)^3\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(1+\\frac{3(i-1)}{n}\\right)^3\\frac{3}{n}\\)"
      ],

      correct: 0,

      explanation:
        "The interval length is \\(4-1=3\\), so \\(\\Delta x=\\frac{3}{n}\\). For right-hand endpoints, \\(x_i=1+\\frac{3i}{n}\\)."
    },


    /* =====================================
       QUESTION 3
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-1}^3 x^2\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(-1+\\frac{4i}{n}\\right)^2\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(-1+\\frac{3i}{n}\\right)^2\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\frac{4i}{n}\\right)^2\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(-1+\\frac{4(i-1)}{n}\\right)^2\\frac{4}{n}\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(\\Delta x=\\frac{3-(-1)}{n}=\\frac{4}{n}\\). The right endpoint of the \\(i\\)-th subinterval is \\(x_i=-1+\\frac{4i}{n}\\)."
    },


    /* =====================================
       QUESTION 4
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_2^5 \\sqrt{x}\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sqrt{2+\\frac{3i}{n}}\\,\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sqrt{\\frac{3i}{n}}\\,\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sqrt{2+\\frac{5i}{n}}\\,\\frac{5}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sqrt{2+\\frac{3(i-1)}{n}}\\,\\frac{3}{n}\\)"
      ],

      correct: 0,

      explanation:
        "The interval length is \\(5-2=3\\), so \\(\\Delta x=\\frac3n\\). Using right-hand endpoints gives \\(x_i=2+\\frac{3i}{n}\\)."
    },


    /* =====================================
       QUESTION 5
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^3 e^x\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}e^{3i/n}\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}e^{i/n}\\frac{1}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}e^{3i/n}\\frac{1}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}e^{3(i-1)/n}\\frac{3}{n}\\)"
      ],

      correct: 0,

      explanation:
        "Since \\(\\Delta x=\\frac3n\\), the right endpoints are \\(x_i=\\frac{3i}{n}\\). Thus \\(f(x_i)=e^{3i/n}\\)."
    },


    /* =====================================
       QUESTION 6
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^3 \\frac{1}{x}\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+2i/n}\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{2i/n}\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+3i/n}\\frac{3}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+2(i-1)/n}\\frac{2}{n}\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(\\Delta x=\\frac{3-1}{n}=\\frac2n\\), and the right endpoints are \\(x_i=1+\\frac{2i}{n}\\). Therefore \\(f(x_i)=\\frac{1}{1+2i/n}\\)."
    },


    /* =====================================
       QUESTION 7
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-2}^2 \\cos x\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\cos\\left(-2+\\frac{4i}{n}\\right)\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\cos\\left(\\frac{4i}{n}\\right)\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\cos\\left(-2+\\frac{2i}{n}\\right)\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\cos\\left(-2+\\frac{4(i-1)}{n}\\right)\\frac{4}{n}\\)"
      ],

      correct: 0,

      explanation:
        "The interval has length \\(4\\), so \\(\\Delta x=\\frac4n\\). The right endpoints are \\(x_i=-2+\\frac{4i}{n}\\)."
    },


    /* =====================================
       QUESTION 8
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_2^6 \\frac{1}{1+x^2}\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+\\left(2+\\frac{4i}{n}\\right)^2}\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+\\left(\\frac{4i}{n}\\right)^2}\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+\\left(2+\\frac{6i}{n}\\right)^2}\\frac{6}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+\\left(2+\\frac{4(i-1)}{n}\\right)^2}\\frac{4}{n}\\)"
      ],

      correct: 0,

      explanation:
        "Since \\(6-2=4\\), we have \\(\\Delta x=\\frac4n\\). Right-hand endpoints are \\(x_i=2+\\frac{4i}{n}\\), which are substituted into \\(f(x)=\\frac{1}{1+x^2}\\)."
    },


    /* =====================================
       QUESTION 9
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^5 \\ln x\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\ln\\left(1+\\frac{4i}{n}\\right)\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\ln\\left(\\frac{4i}{n}\\right)\\frac{4}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\ln\\left(1+\\frac{5i}{n}\\right)\\frac{5}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\ln\\left(1+\\frac{4(i-1)}{n}\\right)\\frac{4}{n}\\)"
      ],

      correct: 0,

      explanation:
        "The interval length is \\(4\\), so \\(\\Delta x=\\frac4n\\). Right-hand endpoints are \\(x_i=1+\\frac{4i}{n}\\)."
    },


    /* =====================================
       QUESTION 10
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-1}^1 (x^2+2)\\,dx\\)",

      choices: [
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left[\\left(-1+\\frac{2i}{n}\\right)^2+2\\right]\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left[\\left(\\frac{2i}{n}\\right)^2+2\\right]\\frac{2}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left[\\left(-1+\\frac{i}{n}\\right)^2+2\\right]\\frac{1}{n}\\)",
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left[\\left(-1+\\frac{2(i-1)}{n}\\right)^2+2\\right]\\frac{2}{n}\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(\\Delta x=\\frac{1-(-1)}{n}=\\frac2n\\), and the right endpoints are \\(x_i=-1+\\frac{2i}{n}\\). Substitute these into \\(f(x)=x^2+2\\)."
    }

  ]
},
{
  course: "calculus-2",
  section: "Riemann Sums",
  id: "riemann-sum-to-definite-integral",
  type: "randomized-multiple-choice",

  question:
    "Express the following limit of a Riemann sum as a definite integral.",

  pool: [

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(1+\\frac{2i}{n}\\right)^2\\frac{2}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_1^3 x^2\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^2 x^2\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^2 x^2\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^3 2x^2\\,dx\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(\\Delta x=\\frac{2}{n}\\), so the interval has length \\(2\\). Since \\(x_i=1+\\frac{2i}{n}\\), the interval is \\([1,3]\\). Therefore the limit is \\(\\displaystyle \\int\\limits_1^3 x^2\\,dx\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sqrt{2+\\frac{3i}{n}}\\,\\frac{3}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_0^3 \\sqrt{x}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^5 \\sqrt{x}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^3 \\sqrt{x}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^5 3\\sqrt{x}\\,dx\\)"
      ],

      correct: 1,

      explanation:
        "Since \\(\\Delta x=\\frac{3}{n}\\) and \\(x_i=2+\\frac{3i}{n}\\), the interval begins at \\(2\\) and has length \\(3\\). Thus the interval is \\([2,5]\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}e^{i/n}\\frac{1}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_0^1 e^x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^2 e^x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^1 xe^x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^n e^x\\,dx\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(\\Delta x=\\frac1n\\) and \\(x_i=\\frac{i}{n}\\), which corresponds to the interval \\([0,1]\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{1+\\left(2+\\frac{4i}{n}\\right)^2}\\frac{4}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_0^4 \\frac{1}{1+x^2}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^4 \\frac{1}{1+x^2}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^6 \\frac{1}{1+x^2}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^6 \\frac{4}{1+x^2}\\,dx\\)"
      ],

      correct: 2,

      explanation:
        "The width is \\(\\Delta x=\\frac4n\\). Since the sample point is \\(x_i=2+\\frac{4i}{n}\\), the interval begins at \\(2\\) and has length \\(4\\), giving \\([2,6]\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\cos\\left(-2+\\frac{5i}{n}\\right)\\frac{5}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_{-2}^{3}\\cos x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^5\\cos x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_{-2}^{5}\\cos x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_{-2}^{3}5\\cos x\\,dx\\)"
      ],

      correct: 0,

      explanation:
        "Here \\(\\Delta x=\\frac5n\\), and \\(x_i=-2+\\frac{5i}{n}\\). Starting at \\(-2\\) and adding an interval length of \\(5\\) gives the interval \\([-2,3]\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\ln\\left(1+\\frac{2i}{n}\\right)\\frac{2}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_0^2\\ln x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^3\\ln x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^2\\ln x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^3 2\\ln x\\,dx\\)"
      ],

      correct: 1,

      explanation:
        "The factor \\(\\frac2n\\) is \\(\\Delta x\\), and \\(x_i=1+\\frac{2i}{n}\\). Therefore \\(a=1\\) and \\(b-a=2\\), so \\(b=3\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(4+\\frac{3i}{n}\\right)^3\\frac{3}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_3^7x^3\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_4^7x^3\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_4^3x^3\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_4^7 3x^3\\,dx\\)"
      ],

      correct: 1,

      explanation:
        "Since \\(\\Delta x=\\frac3n\\) and \\(x_i=4+\\frac{3i}{n}\\), the interval begins at \\(4\\) and has length \\(3\\), so it is \\([4,7]\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\frac{1}{2+i/n}\\frac{1}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_0^1\\frac{1}{x}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^2\\frac{1}{x}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^3\\frac{1}{x}\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_2^3\\frac{1}{2+x}\\,dx\\)"
      ],

      correct: 2,

      explanation:
        "Here \\(\\Delta x=\\frac1n\\) and \\(x_i=2+\\frac{i}{n}\\), so the interval is \\([2,3]\\) and the function is \\(f(x)=\\frac1x\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sin\\left(\\frac{6i}{n}\\right)\\frac{6}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_0^6\\sin x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_1^6\\sin x\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^1\\sin(6x)\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^6 6\\sin x\\,dx\\)"
      ],

      correct: 0,

      explanation:
        "Since \\(\\Delta x=\\frac6n\\) and \\(x_i=\\frac{6i}{n}\\), the Riemann sum represents \\(\\displaystyle \\int\\limits_0^6\\sin x\\,dx\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(-1+\\frac{4i}{n}\\right)^2\\frac{4}{n}\\)",

      choices: [
        "\\(\\displaystyle \\int\\limits_{-1}^{3}x^2\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_0^4x^2\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_{-1}^{4}x^2\\,dx\\)",
        "\\(\\displaystyle \\int\\limits_{-1}^{3}4x^2\\,dx\\)"
      ],

      correct: 0,

      explanation:
        "The interval starts at \\(-1\\), and \\(\\Delta x=\\frac4n\\) shows that its total length is \\(4\\). Hence the interval is \\([-1,3]\\)."
    }

  ]
},{
  course: "calculus-2",
  section: "Definite Integrals",
  id: "order-integrals-by-value",
  type: "drag-order",

  question:
    "Drag the following definite integrals into increasing order. Try to compare the integrands rather than evaluating the integrals.",

  pool: [

    /* =====================================
       SET 1
    ===================================== */

    {
      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{x^2}{1+x^2}\\,dx\\)",
          rank: 1
        },

        {
          id: "B",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{x}{1+x}\\,dx\\)",
          rank: 2
        },

        {
          id: "C",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{1+x}\\,dx\\)",
          rank: 3
        },

        {
          id: "D",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{1+x^2}\\,dx\\)",
          rank: 4
        }
      ],

      explanation:
        "For \\(0<x<1\\), \\(\\frac{x^2}{1+x^2}<\\frac{x}{1+x}<\\frac{1}{1+x}<\\frac{1}{1+x^2}\\). Since all four integrals are over the same interval, the same ordering holds for their values."
    },


    /* =====================================
       SET 2
    ===================================== */

    {
      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{x^2}{2+x^2}\\,dx\\)",
          rank: 1
        },

        {
          id: "B",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{x}{2+x}\\,dx\\)",
          rank: 2
        },

        {
          id: "C",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{2+x}\\,dx\\)",
          rank: 3
        },

        {
          id: "D",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{1+x^2}\\,dx\\)",
          rank: 4
        }
      ],

      explanation:
        "On \\(0<x<1\\), the four integrands satisfy \\(\\frac{x^2}{2+x^2}<\\frac{x}{2+x}<\\frac{1}{2+x}<\\frac{1}{1+x^2}\\). Therefore their integrals have the same increasing order."
    },


    /* =====================================
       SET 3
    ===================================== */

    {
      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\int\\limits_{-1}^1 x^4\\,dx\\)",
          rank: 1
        },

        {
          id: "B",
          content:
            "\\(\\displaystyle \\int\\limits_{-1}^1 x^2\\,dx\\)",
          rank: 2
        },

        {
          id: "C",
          content:
            "\\(\\displaystyle \\int\\limits_{-1}^1 |x|\\,dx\\)",
          rank: 3
        },

        {
          id: "D",
          content:
            "\\(\\displaystyle \\int\\limits_{-1}^1 1\\,dx\\)",
          rank: 4
        }
      ],

      explanation:
        "For \\(-1<x<1\\), \\(x^4\\le x^2\\le |x|\\le1\\), with strict inequalities except at selected points. Integrating over the same interval preserves this ordering."
    },


    /* =====================================
       SET 4
    ===================================== */

    {
      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\int\\limits_0^{\\pi/4}\\sin^2x\\,dx\\)",
          rank: 1
        },

        {
          id: "B",
          content:
            "\\(\\displaystyle \\int\\limits_0^{\\pi/4}\\sin x\\cos x\\,dx\\)",
          rank: 2
        },

        {
          id: "C",
          content:
            "\\(\\displaystyle \\int\\limits_0^{\\pi/4}\\cos^2x\\,dx\\)",
          rank: 3
        },

        {
          id: "D",
          content:
            "\\(\\displaystyle \\int\\limits_0^{\\pi/4}\\cos x\\,dx\\)",
          rank: 4
        }
      ],

      explanation:
        "On \\(0<x<\\frac{\\pi}{4}\\), we have \\(0<\\sin x<\\cos x<1\\). Therefore \\(\\sin^2x<\\sin x\\cos x<\\cos^2x<\\cos x\\), so the integrals follow the same order."
    },


    /* =====================================
       SET 5
    ===================================== */

    {
      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\frac{x}{1+x}\\,dx\\)",
          rank: 1
        },

        {
          id: "B",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\ln(1+x)\\,dx\\)",
          rank: 2
        },

        {
          id: "C",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 x\\,dx\\)",
          rank: 3
        },

        {
          id: "D",
          content:
            "\\(\\displaystyle \\int\\limits_0^1 \\sqrt{x}\\,dx\\)",
          rank: 4
        }
      ],

      explanation:
        "For \\(0<x<1\\), \\(\\frac{x}{1+x}<\\ln(1+x)<x<\\sqrt{x}\\). Since the interval is the same for all four integrals, this gives their increasing order."
    }

  ]
},
 {
  course: "calculus-2",
  section: "Integration Techniques",
  id: "integration-method-1",
  type: "randomized-multiple-choice",

  question:
    "Which integration technique is most appropriate for the following integral?",

  choices: [
    "u-Substitution",
    "Integration by Parts",
    "Trigonometric Substitution",
    "Partial Fractions"
  ],

  pool: [

    // u-SUBSTITUTION

    {
      content:
        "\\(\\displaystyle \\int 2x\\cos(x^2)\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient because the derivative of \\(x^2\\) appears as a factor in the integrand."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x}{(x^2+4)^3}\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient with \\(u=x^2+4\\), since its derivative is proportional to \\(x\\,dx\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{e^x}{1+e^x}\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient with \\(u=1+e^x\\), since \\(du=e^x\\,dx\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sec^2 x}{3+\\tan x}\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient with \\(u=3+\\tan x\\), since \\(du=\\sec^2x\\,dx\\)."
    },


    // INTEGRATION BY PARTS

    {
      content:
        "\\(\\displaystyle \\int xe^x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is most efficient because the integrand is a product of an algebraic function and an exponential function."
    },

    {
      content:
        "\\(\\displaystyle \\int x\\cos x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is most efficient because the integrand is a product of an algebraic and a trigonometric function."
    },

    {
      content:
        "\\(\\displaystyle \\int \\ln x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is appropriate by viewing the integrand as \\(1\\cdot\\ln x\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int x^2\\ln x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is most efficient because differentiating \\(\\ln x\\) simplifies it while \\(x^2\\) is easy to integrate."
    },


    // TRIGONOMETRIC SUBSTITUTION

    {
      content:
        "\\(\\displaystyle \\int \\sqrt{9-x^2}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the integrand contains the form \\(\\sqrt{a^2-x^2}\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{\\sqrt{x^2+4}}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the radical contains the form \\(x^2+a^2\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2}{\\sqrt{x^2+9}}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the radical contains the form \\(x^2+a^2\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sqrt{x^2-25}}{x}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the radical contains the form \\(x^2-a^2\\)."
    },


    // PARTIAL FRACTIONS

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x^2-1}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is most efficient because the integrand is a proper rational function whose denominator factors as \\((x-1)(x+1)\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x(x+2)}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is most efficient because the integrand is a proper rational function with distinct linear factors."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x+1}{x^2-4x+3}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is appropriate because the denominator factors into linear factors."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2+1}{x(x-1)(x+1)}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is appropriate because this is a proper rational function whose denominator is already factored into linear factors."
    }

  ]
}
];
