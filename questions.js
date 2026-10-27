const questions = [
{
  course: "calculus-1",
  section: "Sequence Limits",
  id: "proof-order-squeeze-theorem",
  type: "logical-order",

  question:
    "Arrange the following statements in a logical order to complete the proof of the Squeeze Theorem for Sequences.",

  prompt:
    "Assume \\(a_n\\le b_n\\le c_n\\) for all sufficiently large \\(n\\), and \\(\\lim_{n\\to\\infty}a_n=L=\\lim_{n\\to\\infty}c_n\\).",

  items: [
    {
      id: "A",
      content:
        "Let \\(\\varepsilon>0\\) be given.",
      rank: 1
    },

    {
      id: "B",
      content:
        "Since \\(a_n\\to L\\) and \\(c_n\\to L\\), choose \\(N>M\\) such that for \\(n>N\\), both \\(a_n\\) and \\(c_n\\) lie in \\((L-\\varepsilon,L+\\varepsilon)\\).",
      rank: 2
    },

    {
      id: "C",
      content:
        "For \\(n>N\\), we have \\(L-\\varepsilon<a_n\\le b_n\\le c_n<L+\\varepsilon\\).",
      rank: 3
    },

    {
      id: "D",
      content:
        "Therefore \\(b_n\\in(L-\\varepsilon,L+\\varepsilon)\\) whenever \\(n>N\\).",
      rank: 4
    },

    {
      id: "E",
      content:
        "Hence \\(\\lim_{n\\to\\infty}b_n=L\\).",
      rank: 5
    }
  ],

  explanation:
    "This follows the epsilon-based proof of the Squeeze Theorem given in the MATH 137 notes."
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
},
  {
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
},
  {
  course: "calculus-2",
  section: "Integration Techniques",
  id: "choose-integration-method",
  type: "sorting-bucket",

  question:
    "For each integral below, choose the most efficient integration method.",

  instructions:
    "You do not need to evaluate the integrals. Sort each integral into the box for the most efficient method.",

  bankTitle:
    "Integrals to Sort",

  buckets: [
    "u-Substitution",
    "Integration by Parts",
    "Trigonometric Substitution",
    "Partial Fractions"
  ],

  numberToDraw: 6,

  pool: [

    // -------------------------
    // u-SUBSTITUTION
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int 2x\\cos(x^2)\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x}{(x^2+4)^3}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int e^{3x+1}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{e^x}{1+e^x}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sec^2 x}{3+\\tan x}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },


    // -------------------------
    // INTEGRATION BY PARTS
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int xe^x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int x\\cos x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int \\ln x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int x^2\\ln x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int x\\arctan x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },


    // -------------------------
    // TRIGONOMETRIC SUBSTITUTION
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int \\sqrt{9-x^2}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{\\sqrt{x^2+4}}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2}{\\sqrt{x^2+9}}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{(x^2+16)^{3/2}}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sqrt{x^2-25}}{x}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },


    // -------------------------
    // PARTIAL FRACTIONS
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x^2-1}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{2x+3}{x^2+x-2}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x(x+2)}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x+1}{x^2-4x+3}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2+1}{x(x-1)(x+1)}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    }

  ]
},

  {
  course: "calculus-2",
  section: "Improper Integrals",
  id: "p-integral-1",
  type: "multiple-choice",

  question:
    "For which values of \\(p\\) does \\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^p}\\,dx\\) converge?",

  choices: [
    "\\(p>0\\)",
    "\\(p\\ge 1\\)",
    "\\(p>1\\)",
    "\\(p<1\\)"
  ],

  correct: 2,

  explanation:
    "The p-integral \\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^p}\\,dx\\) converges precisely when \\(p>1\\)."
},
  {
  course: "calculus-2",
  section: "Improper Integrals",
  id: "improper-integral-two-stage",
  type: "two-stage-classification",

  question:
    "Classify each improper integral, then determine whether it converges or diverges.",

  numberToDraw: 4,

  stage1: {
    label: "Part I: Identify the type of each improper integral.",
    key: "type",
    columnLabel: "Type",
    choices: [
      "Type I",
      "Type II"
    ]
  },

  stage2: {
    label: "Part II: Determine whether each improper integral converges or diverges.",
    key: "behavior",
    columnLabel: "Behavior",
    choices: [
      "Converges",
      "Diverges"
    ]
  },

  pool: [

    /* =====================================
       TYPE I — CONVERGES
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^2}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_2^\\infty \\frac{1}{x^3}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^{3/2}}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty e^{-x}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-\\infty}^0 e^x\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty \\frac{1}{1+x^2}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{\\ln x}{x^2}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty x e^{-x}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Converges"
      }
    },


    /* =====================================
       TYPE I — DIVERGES
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{\\sqrt{x}}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_2^\\infty \\frac{1}{x^{2/3}}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty 1\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{x+1}{x^2}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^{1/3}}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty \\frac{x}{x+1}\\,dx\\)",

      answers: {
        type: "Type I",
        behavior: "Diverges"
      }
    },


    /* =====================================
       TYPE II — CONVERGES
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{\\sqrt{x}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{x^{1/3}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^2 \\frac{1}{(x-1)^{1/2}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^4 \\frac{1}{\\sqrt{4-x}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-2}^0 \\frac{1}{\\sqrt{x+2}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\ln x\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{(1-x)^{1/3}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-1}^1 \\frac{1}{(x+1)^{2/3}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Converges"
      }
    },


    /* =====================================
       TYPE II — DIVERGES
    ===================================== */

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{x}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{x^2}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^2 \\frac{1}{(x-1)^2}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-1}^1 \\frac{1}{x^2}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^{\\pi/2} \\tan x\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^2 \\frac{1}{x-1}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{(1-x)^{3/2}}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_{-2}^0 \\frac{1}{x+2}\\,dx\\)",

      answers: {
        type: "Type II",
        behavior: "Diverges"
      }
    }

  ]
},
  {
  course: "calculus-2",
  section: "Improper Integrals",
  id: "improper-type-and-convergence",
  type: "randomized-multiple-choice",

  question:
    "Classify the improper integral and determine whether it converges or diverges.",

  choices: [
    "Type I and converges",
    "Type I and diverges",
    "Type II and converges",
    "Type II and diverges"
  ],

  pool: [

    // =====================================
    // TYPE I — CONVERGES
    // correct: 0
    // =====================================

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^2}\\,dx\\)",
      correct: 0,
      explanation:
        "This is Type I because the interval is infinite. It is a p-integral with \\(p=2>1\\), so it converges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_2^\\infty \\frac{1}{x^3}\\,dx\\)",
      correct: 0,
      explanation:
        "This is Type I because the upper limit is infinite. Since it is a p-integral with \\(p=3>1\\), it converges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty e^{-x}\\,dx\\)",
      correct: 0,
      explanation:
        "This is Type I because the interval is unbounded. The exponential decay is strong enough for the integral to converge."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^{3/2}}\\,dx\\)",
      correct: 0,
      explanation:
        "This is Type I. It is a p-integral with \\(p=\\frac{3}{2}>1\\), so it converges."
    },


    // =====================================
    // TYPE I — DIVERGES
    // correct: 1
    // =====================================

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x}\\,dx\\)",
      correct: 1,
      explanation:
        "This is Type I because the interval is infinite. It is the harmonic p-integral with \\(p=1\\), so it diverges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{\\sqrt{x}}\\,dx\\)",
      correct: 1,
      explanation:
        "This is Type I. It is a p-integral with \\(p=\\frac12\\le 1\\), so it diverges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_2^\\infty \\frac{1}{x^{2/3}}\\,dx\\)",
      correct: 1,
      explanation:
        "This is Type I because the upper limit is infinite. Since \\(p=\\frac23\\le1\\), the p-integral diverges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^\\infty 1\\,dx\\)",
      correct: 1,
      explanation:
        "This is Type I because the interval is infinite. The accumulated area grows without bound, so the integral diverges."
    },


    // =====================================
    // TYPE II — CONVERGES
    // correct: 2
    // =====================================

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{\\sqrt{x}}\\,dx\\)",
      correct: 2,
      explanation:
        "This is Type II because the integrand is unbounded at \\(x=0\\). Since the singularity behaves like \\(x^{-1/2}\\) with exponent less than 1, the integral converges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\ln x\\,dx\\)",
      correct: 2,
      explanation:
        "This is Type II because \\(\\ln x\\) is unbounded as \\(x\\to0^+\\). The corresponding improper limit is finite, so the integral converges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^4 \\frac{1}{\\sqrt{4-x}}\\,dx\\)",
      correct: 2,
      explanation:
        "This is Type II because the integrand is unbounded at \\(x=4\\). The singularity has exponent \\(\\frac12<1\\), so the integral converges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_1^2 \\frac{1}{(x-1)^{1/3}}\\,dx\\)",
      correct: 2,
      explanation:
        "This is Type II because the integrand is unbounded at \\(x=1\\). Since the singularity has exponent \\(\\frac13<1\\), the integral converges."
    },


    // =====================================
    // TYPE II — DIVERGES
    // correct: 3
    // =====================================

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{x}\\,dx\\)",
      correct: 3,
      explanation:
        "This is Type II because the integrand is unbounded at \\(x=0\\). The corresponding p-type singularity has exponent \\(1\\), so the integral diverges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^1 \\frac{1}{x^2}\\,dx\\)",
      correct: 3,
      explanation:
        "This is Type II because the integrand is unbounded at \\(x=0\\). Since the singularity has exponent \\(2\\ge1\\), the integral diverges."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^2 \\frac{1}{(x-1)^2}\\,dx\\)",
      correct: 3,
      explanation:
        "This is Type II because the integrand is unbounded at the interior point \\(x=1\\). Splitting the integral at \\(x=1\\) produces divergent improper integrals."
    },

    {
      content:
        "\\(\\displaystyle \\int\\limits_0^{\\pi/2} \\tan x\\,dx\\)",
      correct: 3,
      explanation:
        "This is Type II because \\(\\tan x\\) becomes unbounded as \\(x\\to\\frac{\\pi}{2}^-\\). The corresponding improper limit diverges."
    }

  ]
},


  {
  course: "calculus-2",
  section: "Fundamental Theorem of Calculus",
  id: "ftc-1",
  type: "multiple-choice",

  question:
    "If \\(F(x)=\\displaystyle\\int\\limits_0^x f(t)\\,dt\\) and \\(f\\) is continuous, what is \\(F'(x)\\)?",

  choices: [
    "\\(f(0)\\)",
    "\\(f(x)\\)",
    "\\(\\displaystyle\\int\\limits_0^x f'(t)\\,dt\\)",
    "\\(x f(x)\\)"
  ],

  correct: 1,

  explanation:
    "By the Fundamental Theorem of Calculus Part I, \\(F'(x)=f(x)\\)."
}, {
  course: "calculus-2",
  section: "Fundamental Theorem of Calculus",
  id: "ftc-chain-rule-composite-upper-limit",
  type: "randomized-multiple-choice",

  question:
    "Differentiate the following function using the Fundamental Theorem of Calculus and the Chain Rule.",

  pool: [

    {
      content:
        "\\(\\displaystyle \\frac{d}{dx}\\left[\\int\\limits_1^{(x^2+1)^3}\\sqrt{t}\\,dt\\right]\\)",

      choices: [
        "\\(\\displaystyle 6x(x^2+1)^2\\sqrt{(x^2+1)^3}\\)",
        "\\(\\displaystyle 3(x^2+1)^2\\sqrt{(x^2+1)^3}\\)",
        "\\(\\displaystyle 6x\\sqrt{x^2+1}\\)",
        "\\(\\displaystyle 2x\\sqrt{(x^2+1)^3}\\)"
      ],

      correct: 0,

      explanation:
        "Using FTC, first evaluate the integrand at the upper limit, giving \\(\\sqrt{(x^2+1)^3}\\). Then differentiate the upper limit: \\(\\frac{d}{dx}(x^2+1)^3=6x(x^2+1)^2\\). Multiply the two factors."
    },

    {
      content:
        "\\(\\displaystyle \\frac{d}{dx}\\left[\\int\\limits_0^{\\sin(x^2)} e^t\\,dt\\right]\\)",

      choices: [
        "\\(\\displaystyle 2x\\cos(x^2)e^{\\sin(x^2)}\\)",
        "\\(\\displaystyle \\cos(x^2)e^{\\sin(x^2)}\\)",
        "\\(\\displaystyle 2x\\sin(x^2)e^{\\sin(x^2)}\\)",
        "\\(\\displaystyle 2x e^{x^2}\\)"
      ],

      correct: 0,

      explanation:
        "FTC gives \\(e^{\\sin(x^2)}\\), and the Chain Rule gives \\(\\frac{d}{dx}\\sin(x^2)=2x\\cos(x^2)\\)."
    },

    {
      content:
        "\\(\\displaystyle \\frac{d}{dx}\\left[\\int\\limits_2^{e^{x^2}} \\frac{1}{1+t^2}\\,dt\\right]\\)",

      choices: [
        "\\(\\displaystyle \\frac{2xe^{x^2}}{1+e^{2x^2}}\\)",
        "\\(\\displaystyle \\frac{e^{x^2}}{1+e^{2x^2}}\\)",
        "\\(\\displaystyle \\frac{2x}{1+e^{2x^2}}\\)",
        "\\(\\displaystyle \\frac{2xe^{2x^2}}{1+e^{2x^2}}\\)"
      ],

      correct: 0,

      explanation:
        "Evaluate the integrand at \\(t=e^{x^2}\\), then multiply by \\(\\frac{d}{dx}e^{x^2}=2xe^{x^2}\\)."
    },

    {
      content:
        "\\(\\displaystyle \\frac{d}{dx}\\left[\\int\\limits_1^{\\ln(x^2+1)} \\cos t\\,dt\\right]\\)",

      choices: [
        "\\(\\displaystyle \\frac{2x}{x^2+1}\\cos\\!\\bigl(\\ln(x^2+1)\\bigr)\\)",
        "\\(\\displaystyle \\cos\\!\\bigl(\\ln(x^2+1)\\bigr)\\)",
        "\\(\\displaystyle -\\frac{2x}{x^2+1}\\sin\\!\\bigl(\\ln(x^2+1)\\bigr)\\)",
        "\\(\\displaystyle \\frac{1}{x^2+1}\\cos\\!\\bigl(\\ln(x^2+1)\\bigr)\\)"
      ],

      correct: 0,

      explanation:
        "FTC gives \\(\\cos(\\ln(x^2+1))\\), and the Chain Rule gives \\(\\frac{d}{dx}\\ln(x^2+1)=\\frac{2x}{x^2+1}\\)."
    }

  ]
}, {
  course: "calculus-2",
  section: "Fundamental Theorem of Calculus",
  id: "area-function-and-derivative",
  type: "randomized-multiple-choice",

  question:
    "Let the following integral define an area function. Find the ordered pair \\(\\bigl(A(c),A'(c)\\bigr)\\).",

  pool: [

    /* =====================================
       QUESTION 1
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x t\\,dt, \\qquad c=2\\)",

      choices: [
        "\\(\\left(2,2\\right)\\)",
        "\\(\\left(4,2\\right)\\)",
        "\\(\\left(2,1\\right)\\)",
        "\\(\\left(4,1\\right)\\)"
      ],

      correct: 0,

      explanation:
        "The value \\(A(2)\\) is the area of the triangle under \\(y=t\\) from \\(0\\) to \\(2\\), so \\(A(2)=\\frac12(2)(2)=2\\). By FTC I, \\(A'(2)=2\\)."
    },


    /* =====================================
       QUESTION 2
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x 3\\,dt, \\qquad c=4\\)",

      choices: [
        "\\(\\left(12,3\\right)\\)",
        "\\(\\left(3,12\\right)\\)",
        "\\(\\left(12,4\\right)\\)",
        "\\(\\left(4,3\\right)\\)"
      ],

      correct: 0,

      explanation:
        "The accumulated area is a rectangle of width \\(4\\) and height \\(3\\), so \\(A(4)=12\\). By FTC I, \\(A'(4)=3\\)."
    },


    /* =====================================
       QUESTION 3
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x (4-t)\\,dt, \\qquad c=4\\)",

      choices: [
        "\\(\\left(8,0\\right)\\)",
        "\\(\\left(8,4\\right)\\)",
        "\\(\\left(16,0\\right)\\)",
        "\\(\\left(4,8\\right)\\)"
      ],

      correct: 0,

      explanation:
        "From \\(0\\) to \\(4\\), the graph of \\(4-t\\) forms a triangle with base \\(4\\) and height \\(4\\). Thus \\(A(4)=8\\). By FTC I, \\(A'(4)=4-4=0\\)."
    },


    /* =====================================
       QUESTION 4
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x (2t+1)\\,dt, \\qquad c=2\\)",

      choices: [
        "\\(\\left(6,5\\right)\\)",
        "\\(\\left(5,6\\right)\\)",
        "\\(\\left(10,5\\right)\\)",
        "\\(\\left(6,4\\right)\\)"
      ],

      correct: 0,

      explanation:
        "The graph is a line increasing from height \\(1\\) to height \\(5\\). The accumulated area is the area of a trapezoid: \\(A(2)=\\frac12(1+5)(2)=6\\). By FTC I, \\(A'(2)=2(2)+1=5\\)."
    },


    /* =====================================
       QUESTION 5
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x (3-t)\\,dt, \\qquad c=2\\)",

      choices: [
        "\\(\\left(4,1\\right)\\)",
        "\\(\\left(2,1\\right)\\)",
        "\\(\\left(4,3\\right)\\)",
        "\\(\\left(1,4\\right)\\)"
      ],

      correct: 0,

      explanation:
        "From \\(0\\) to \\(2\\), the graph decreases from height \\(3\\) to height \\(1\\). The trapezoid has area \\(A(2)=\\frac12(3+1)(2)=4\\). By FTC I, \\(A'(2)=3-2=1\\)."
    },


    /* =====================================
       QUESTION 6
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x (t-1)\\,dt, \\qquad c=2\\)",

      choices: [
        "\\(\\left(0,1\\right)\\)",
        "\\(\\left(1,0\\right)\\)",
        "\\(\\left(2,1\\right)\\)",
        "\\(\\left(0,2\\right)\\)"
      ],

      correct: 0,

      explanation:
        "From \\(0\\) to \\(1\\), the graph is below the axis and contributes area \\(-\\frac12\\). From \\(1\\) to \\(2\\), it contributes \\(+\\frac12\\). These cancel, so \\(A(2)=0\\). By FTC I, \\(A'(2)=2-1=1\\)."
    },


    /* =====================================
       QUESTION 7
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_{-2}^x (t+2)\\,dt, \\qquad c=2\\)",

      choices: [
        "\\(\\left(8,4\\right)\\)",
        "\\(\\left(4,8\\right)\\)",
        "\\(\\left(8,2\\right)\\)",
        "\\(\\left(16,4\\right)\\)"
      ],

      correct: 0,

      explanation:
        "From \\(-2\\) to \\(2\\), the graph forms a triangle with base \\(4\\) and height \\(4\\), so \\(A(2)=8\\). By FTC I, \\(A'(2)=2+2=4\\)."
    },


    /* =====================================
       QUESTION 8
    ===================================== */

    {
      content:
        "\\(\\displaystyle A(x)=\\int\\limits_0^x (2-t)\\,dt, \\qquad c=3\\)",

      choices: [
        "\\(\\left(\\frac32,-1\\right)\\)",
        "\\(\\left(\\frac52,-1\\right)\\)",
        "\\(\\left(\\frac32,1\\right)\\)",
        "\\(\\left(-\\frac32,-1\\right)\\)"
      ],

      correct: 0,

      explanation:
        "From \\(0\\) to \\(2\\), the positive triangular area is \\(2\\). From \\(2\\) to \\(3\\), the graph lies below the axis and contributes \\(-\\frac12\\). Therefore \\(A(3)=2-\\frac12=\\frac32\\). By FTC I, \\(A'(3)=2-3=-1\\)."
    }

  ]
},{
  course: "calculus-2",
  section: "Numerical Series",
  id: "proof-order-tail-convergence",
  type: "logical-order",

  question:
    "Arrange the following statements in a logical order to prove part (i) of the Tail Convergence Theorem.",

  prompt:
    "If \\(\\displaystyle\\sum_{n=1}^{\\infty} a_n\\) converges, show that \\(\\displaystyle\\sum_{n=j}^{\\infty} a_n\\) converges for each positive integer \\(j\\).",

  items: [
    {
      id: "A",
      content:
        "Let \\(m\\ge j\\), and let \\(S_m=\\displaystyle\\sum_{n=1}^{m}a_n\\) and \\(T_m=\\displaystyle\\sum_{n=j}^{m}a_n\\).",
      rank: 1
    },

    {
      id: "B",
      content:
        "We have \\(S_m=(a_1+a_2+\\cdots+a_{j-1})+T_m\\).",
      rank: 2
    },

    {
      id: "C",
      content:
        "Suppose \\(\\displaystyle\\sum_{n=1}^{\\infty}a_n\\) converges, so \\(\\lim_{m\\to\\infty}S_m=S\\) for some \\(S\\in\\mathbb{R}\\).",
      rank: 3
    },

    {
      id: "D",
      content:
        "Therefore \\(T_m=S_m-(a_1+a_2+\\cdots+a_{j-1})\\).",
      rank: 4
    },

    {
      id: "E",
      content:
        "Hence \\(\\lim_{m\\to\\infty}T_m=S-(a_1+a_2+\\cdots+a_{j-1})\\), which is finite.",
      rank: 5
    },

    {
      id: "F",
      content:
        "Therefore \\(\\displaystyle\\sum_{n=j}^{\\infty}a_n\\) converges.",
      rank: 6
    }
  ],

  explanation:
    "The proof follows the course notes by relating the partial sums of the original series to the partial sums of the tail."
},
  {
  course: "calculus-3",
  section: "Functions of Several Variables",
  id: "identify-level-curve",
  type: "randomized-multiple-choice",

  question:
    "Which equation describes the level curve of the given function at the specified value of \\(c\\)?",

  pool: [

    /* =====================================
       QUESTION 1
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=x^2+4y^2, \\qquad c=16\\)",

      choices: [
        "\\(x^2+4y^2=16\\)",
        "\\(x^2+4y^2=4\\)",
        "\\(x^2+y^2=16\\)",
        "\\(x^2+4y^2\\le 16\\)"
      ],

      correct: 0,

      explanation:
        "A level curve at level \\(c\\) is obtained by setting \\(f(x,y)=c\\). Therefore \\(x^2+4y^2=16\\)."
    },


    /* =====================================
       QUESTION 2
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=x^2-y^2, \\qquad c=4\\)",

      choices: [
        "\\(x^2-y^2=4\\)",
        "\\(x^2+y^2=4\\)",
        "\\(x-y=4\\)",
        "\\(x^2-y^2\\le4\\)"
      ],

      correct: 0,

      explanation:
        "Set the function equal to the specified level: \\(f(x,y)=4\\). This gives \\(x^2-y^2=4\\)."
    },


    /* =====================================
       QUESTION 3
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=\\sqrt{x^2+y^2}, \\qquad c=3\\)",

      choices: [
        "\\(x^2+y^2=9\\)",
        "\\(x^2+y^2=3\\)",
        "\\(x+y=3\\)",
        "\\(x^2+y^2\\le9\\)"
      ],

      correct: 0,

      explanation:
        "The level equation is \\(\\sqrt{x^2+y^2}=3\\). Squaring both sides gives \\(x^2+y^2=9\\)."
    },


    /* =====================================
       QUESTION 4
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=e^{x-y}, \\qquad c=e^2\\)",

      choices: [
        "\\(x-y=2\\)",
        "\\(x-y=e^2\\)",
        "\\(x+y=2\\)",
        "\\(y-x=2\\)"
      ],

      correct: 0,

      explanation:
        "Setting \\(e^{x-y}=e^2\\) gives \\(x-y=2\\). Thus the level curve is a straight line."
    },


    /* =====================================
       QUESTION 5
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=\\ln(x^2+y^2), \\qquad c=\\ln 4\\)",

      choices: [
        "\\(x^2+y^2=4\\)",
        "\\(x^2+y^2=\\ln4\\)",
        "\\(x^2+y^2=2\\)",
        "\\(x+y=4\\)"
      ],

      correct: 0,

      explanation:
        "Set \\(\\ln(x^2+y^2)=\\ln4\\). Since the logarithm is one-to-one, \\(x^2+y^2=4\\)."
    },


    /* =====================================
       QUESTION 6
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=xy, \\qquad c=6\\)",

      choices: [
        "\\(xy=6\\)",
        "\\(x+y=6\\)",
        "\\(x^2+y^2=6\\)",
        "\\(y=6x\\)"
      ],

      correct: 0,

      explanation:
        "A level curve is found by setting \\(f(x,y)=c\\), so here the equation is \\(xy=6\\)."
    },


    /* =====================================
       QUESTION 7
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=x^2+y, \\qquad c=5\\)",

      choices: [
        "\\(y=5-x^2\\)",
        "\\(y=x^2-5\\)",
        "\\(y=5+x^2\\)",
        "\\(x^2+y^2=5\\)"
      ],

      correct: 0,

      explanation:
        "Setting \\(x^2+y=5\\) and solving for \\(y\\) gives \\(y=5-x^2\\)."
    },


    /* =====================================
       QUESTION 8
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=\\frac{x}{y}, \\qquad c=2\\)",

      choices: [
        "\\(x=2y\\)",
        "\\(y=2x\\)",
        "\\(xy=2\\)",
        "\\(x-y=2\\)"
      ],

      correct: 0,

      explanation:
        "Setting \\(\\frac{x}{y}=2\\) gives \\(x=2y\\), with \\(y\\ne0\\) because the original function is undefined when \\(y=0\\)."
    },


    /* =====================================
       QUESTION 9
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=x^2+2x+y^2, \\qquad c=3\\)",

      choices: [
        "\\((x+1)^2+y^2=4\\)",
        "\\((x+1)^2+y^2=3\\)",
        "\\((x-1)^2+y^2=4\\)",
        "\\(x^2+y^2=3\\)"
      ],

      correct: 0,

      explanation:
        "From \\(x^2+2x+y^2=3\\), complete the square: \\((x+1)^2-1+y^2=3\\), so \\((x+1)^2+y^2=4\\)."
    },


    /* =====================================
       QUESTION 10
    ===================================== */

    {
      content:
        "\\(\\displaystyle f(x,y)=\\frac{1}{x^2+y^2}, \\qquad c=\\frac14\\)",

      choices: [
        "\\(x^2+y^2=4\\)",
        "\\(x^2+y^2=\\frac14\\)",
        "\\(x^2+y^2=2\\)",
        "\\(x^2+y^2\\le4\\)"
      ],

      correct: 0,

      explanation:
        "Setting \\(\\frac{1}{x^2+y^2}=\\frac14\\) gives \\(x^2+y^2=4\\)."
    }

  ]
},{
  course: "calculus-3",
  section: "Multivariable Limits",
  id: "direct-substitution-multivariable-limits",
  type: "randomized-multi-select",

  question:
    "Select all limits that can be evaluated by direct substitution.",

  instructions:
    "Choose every limit for which direct substitution gives the value of the limit.",

  numberToDraw: 4,

  pool: [

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(1,2)} (x^2+3xy-y^2)\\)",
      correct: true,
      explanation:
        "This is a polynomial expression, so it is continuous everywhere. Direct substitution can be used."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(2,1)} \\frac{x+y}{x^2+y^2}\\)",
      correct: true,
      explanation:
        "The denominator is nonzero at \\((2,1)\\), so the rational function is continuous there and direct substitution can be used."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(0,0)} \\frac{x+y}{x^2+y^2}\\)",
      correct: false,
      explanation:
        "Direct substitution produces division by zero, so direct substitution cannot determine the limit."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(1,1)} \\sqrt{x^2+y^2+2}\\)",
      correct: true,
      explanation:
        "The expression inside the square root is positive near \\((1,1)\\), so the function is continuous there."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(0,0)} \\frac{x^2-y^2}{x^2+y^2}\\)",
      correct: false,
      explanation:
        "Direct substitution gives \\(0/0\\), so another method is needed."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(1,0)} e^{xy+x}\\)",
      correct: true,
      explanation:
        "Exponential functions and polynomials are continuous, so their composition is continuous at \\((1,0)\\)."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(0,0)} \\frac{\\sin(xy)}{xy}\\)",
      correct: false,
      explanation:
        "Direct substitution gives \\(0/0\\). The limit may still exist, but direct substitution alone does not evaluate it."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(2,3)} \\ln(x+y)\\)",
      correct: true,
      explanation:
        "Since \\(x+y=5>0\\) at the point, the logarithm is continuous there, so direct substitution works."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(0,0)} \\frac{x^2y}{x^4+y^2}\\)",
      correct: false,
      explanation:
        "Direct substitution gives \\(0/0\\), so direct substitution does not determine the limit."
    },

    {
      content:
        "\\(\\displaystyle \\lim_{(x,y)\\to(1,-1)} \\cos(x^2+y^2)\\)",
      correct: true,
      explanation:
        "The cosine function and the polynomial inside it are continuous, so direct substitution can be used."
    }

  ]
}, {
  course: "calculus-3",
  section: "Partial Derivatives",
  id: "classify-partial-derivatives",
  type: "sorting-bucket",

  question:
    "Drag each expression into the correct partial derivative category.",

  instructions:
    "For each card, use the given function to identify whether the expression represents \\(f_x\\), \\(f_y\\), \\(f_{xx}\\), or \\(f_{xy}\\).",

  bankTitle:
    "Expressions to Classify",

  buckets: [
    "\\(f_x\\)",
    "\\(f_y\\)",
    "\\(f_{xx}\\)",
    "\\(f_{xy}\\)"
  ],

  numberToDraw: 6,

  pool: [

    /* =====================================
       f_x
    ===================================== */

    {
      content:
        "\\(f(x,y)=x^2y+3y^2,\\quad 2xy\\)",
      correctBucket:
        "\\(f_x\\)"
    },

    {
      content:
        "\\(f(x,y)=x^3+xy^2,\\quad 3x^2+y^2\\)",
      correctBucket:
        "\\(f_x\\)"
    },

    {
      content:
        "\\(f(x,y)=e^{xy}+y,\\quad ye^{xy}\\)",
      correctBucket:
        "\\(f_x\\)"
    },

    {
      content:
        "\\(f(x,y)=\\sin(xy)+x,\\quad y\\cos(xy)+1\\)",
      correctBucket:
        "\\(f_x\\)"
    },


    /* =====================================
       f_y
    ===================================== */

    {
      content:
        "\\(f(x,y)=x^2y+3y^2,\\quad x^2+6y\\)",
      correctBucket:
        "\\(f_y\\)"
    },

    {
      content:
        "\\(f(x,y)=x^3+xy^2,\\quad 2xy\\)",
      correctBucket:
        "\\(f_y\\)"
    },

    {
      content:
        "\\(f(x,y)=e^{xy}+y,\\quad xe^{xy}+1\\)",
      correctBucket:
        "\\(f_y\\)"
    },

    {
      content:
        "\\(f(x,y)=\\sin(xy)+x,\\quad x\\cos(xy)\\)",
      correctBucket:
        "\\(f_y\\)"
    },


    /* =====================================
       f_xx
    ===================================== */

    {
      content:
        "\\(f(x,y)=x^3y+x^2,\\quad 6xy+2\\)",
      correctBucket:
        "\\(f_{xx}\\)"
    },

    {
      content:
        "\\(f(x,y)=x^2e^y+y^2,\\quad 2e^y\\)",
      correctBucket:
        "\\(f_{xx}\\)"
    },

    {
      content:
        "\\(f(x,y)=\\cos x+xy,\\quad -\\cos x\\)",
      correctBucket:
        "\\(f_{xx}\\)"
    },

    {
      content:
        "\\(f(x,y)=x^4+y\\sin x,\\quad 12x^2-y\\sin x\\)",
      correctBucket:
        "\\(f_{xx}\\)"
    },


    /* =====================================
       f_xy
    ===================================== */

    {
      content:
        "\\(f(x,y)=x^2y+3y^2,\\quad 2x\\)",
      correctBucket:
        "\\(f_{xy}\\)"
    },

    {
      content:
        "\\(f(x,y)=x^3y^2+x,\\quad 6x^2y\\)",
      correctBucket:
        "\\(f_{xy}\\)"
    },

    {
      content:
        "\\(f(x,y)=e^{xy},\\quad (1+xy)e^{xy}\\)",
      correctBucket:
        "\\(f_{xy}\\)"
    },

    {
      content:
        "\\(f(x,y)=x^2\\sin y,\\quad 2x\\cos y\\)",
      correctBucket:
        "\\(f_{xy}\\)"
    }

  ]
}, {
  course: "calculus-3",
  section: "Directional Derivatives and Gradient",
  id: "order-directional-derivatives",
  type: "drag-order",

  question:
    "Drag the directions into increasing order according to the value of the directional derivative.",

  pool: [

    /* =====================================
       SET 1
    ===================================== */

    {
      prompt:
        "\\(\\displaystyle \\nabla f(a,b)=\\langle 3,4\\rangle\\)",

      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle -1,0\\rangle\\)",
          rank: 1
        },
        {
          id: "B",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac45,-\\frac35\\right\\rangle\\)",
          rank: 2
        },
        {
          id: "C",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 0,1\\rangle\\)",
          rank: 3
        },
        {
          id: "D",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac35,\\frac45\\right\\rangle\\)",
          rank: 4
        }
      ],

      explanation:
        "The directional derivatives are \\(-3\\), \\(0\\), \\(4\\), and \\(5\\), respectively."
    },

    /* =====================================
       SET 2
    ===================================== */

    {
      prompt:
        "\\(\\displaystyle \\nabla f(a,b)=\\langle 4,-3\\rangle\\)",

      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle -\\frac45,\\frac35\\right\\rangle\\)",
          rank: 1
        },
        {
          id: "B",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 0,1\\rangle\\)",
          rank: 2
        },
        {
          id: "C",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 1,0\\rangle\\)",
          rank: 3
        },
        {
          id: "D",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac45,-\\frac35\\right\\rangle\\)",
          rank: 4
        }
      ],

      explanation:
        "The directional derivatives are \\(-5\\), \\(-3\\), \\(4\\), and \\(5\\), respectively."
    },

    /* =====================================
       SET 3
    ===================================== */

    {
      prompt:
        "\\(\\displaystyle \\nabla f(a,b)=\\langle 1,2\\rangle\\)",

      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle -1,0\\rangle\\)",
          rank: 1
        },
        {
          id: "B",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac{2}{\\sqrt5},-\\frac{1}{\\sqrt5}\\right\\rangle\\)",
          rank: 2
        },
        {
          id: "C",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 1,0\\rangle\\)",
          rank: 3
        },
        {
          id: "D",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac{1}{\\sqrt5},\\frac{2}{\\sqrt5}\\right\\rangle\\)",
          rank: 4
        }
      ],

      explanation:
        "The directional derivatives are \\(-1\\), \\(0\\), \\(1\\), and \\(\\sqrt5\\), respectively."
    },

    /* =====================================
       SET 4
    ===================================== */

    {
      prompt:
        "\\(\\displaystyle \\nabla f(a,b)=\\langle -2,2\\rangle\\)",

      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac{1}{\\sqrt2},-\\frac{1}{\\sqrt2}\\right\\rangle\\)",
          rank: 1
        },
        {
          id: "B",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 1,0\\rangle\\)",
          rank: 2
        },
        {
          id: "C",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 0,1\\rangle\\)",
          rank: 3
        },
        {
          id: "D",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle -\\frac{1}{\\sqrt2},\\frac{1}{\\sqrt2}\\right\\rangle\\)",
          rank: 4
        }
      ],

      explanation:
        "The directional derivatives are \\(-2\\sqrt2\\), \\(-2\\), \\(2\\), and \\(2\\sqrt2\\), respectively."
    },

    /* =====================================
       SET 5
    ===================================== */

    {
      prompt:
        "\\(\\displaystyle \\nabla f(a,b)=\\langle 5,0\\rangle\\)",

      items: [
        {
          id: "A",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle -1,0\\rangle\\)",
          rank: 1
        },
        {
          id: "B",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle -\\frac35,\\frac45\\right\\rangle\\)",
          rank: 2
        },
        {
          id: "C",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\langle 0,1\\rangle\\)",
          rank: 3
        },
        {
          id: "D",
          content:
            "\\(\\displaystyle \\mathbf{u}=\\left\\langle \\frac35,\\frac45\\right\\rangle\\)",
          rank: 4
        }
      ],

      explanation:
        "The directional derivatives are \\(-5\\), \\(-3\\), \\(0\\), and \\(3\\), respectively."
    }

  ]
}

];
