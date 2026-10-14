const questions = [

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
},,
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
}

];
