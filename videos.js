const videos = [
  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "understanding-limits",
    section: "Limits and Continuity",
    topic: "Limits",
    title: "Understanding Limits",
    youtubeId: "",
    description:
      "An introduction to limits and how they describe the behaviour of a function near a point."
  },

  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "one-sided-limits",
    section: "Limits and Continuity",
    topic: "Limits",
    title: "One-Sided Limits",
    youtubeId: "",
    description:
      "Understanding left-hand and right-hand limits using graphical and numerical examples."
  },

  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "derivative-at-a-point",
    section: "Derivatives",
    topic: "Derivatives",
    title: "The Derivative at a Point",
    youtubeId: "",
    description:
      "Connecting the derivative to instantaneous rate of change and tangent lines."
  },

  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "chain-rule",
    section: "Derivatives",
    topic: "Derivatives",
    title: "The Chain Rule",
    youtubeId: "",
    description:
      "Recognizing composite functions and applying the chain rule efficiently."
  },
 {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "riemann-sum-right-versus-left-endpoints",
  section: "Riemann Sums",
  topic: "Riemann Sums",
  title: "Riemann Sum: Right versus Left Endpoints",
  youtubeId: "GHoimsHIzdE",
  description:
    "A comparison of right-endpoint and left-endpoint Riemann sums and how the choice of sample points affects the approximation."
},
{
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "calculate-integral-using-riemann-sum",
  section: "Riemann Sums",
  topic: "Riemann Sums",
  title: "Calculating an Integral Using a Riemann Sum",
  youtubeId: "a1T61dUHs4s",
  description:
    "A worked example showing how a definite integral can be calculated using a Riemann sum."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "integral-as-net-area",
  section: "Definite Integrals",
  topic: "Definite Integrals",
  title: "Integral as a Net Area",
  youtubeId: "0miwGorLPS8",
  description:
    "An explanation of how a definite integral represents net signed area, accounting for regions above and below the x-axis."
},

  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "estimating-integral-bounded-function",
  section: "Definite Integrals",
  topic: "Definite Integrals",
  title: "Estimating an Integral for a Bounded Function",
  youtubeId: "kZtL3QqhR1M",
  description:
    "An example illustrating how to estimate the value of a definite integral when the function is bounded."
},

  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "average-value-of-a-function",
  section: "Definite Integrals",
  topic: "Definite Integrals",
  title: "Average Value of a Function",
  youtubeId: "m3Q9dr_yr3Y",
  description:
    "An introduction to the average value of a function on a closed interval and its connection to definite integrals."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "ftc-i-in-action",
  section: "Fundamental Theorem of Calculus",
  topic: "FTC I",
  title: "FTC I in Action",
  youtubeId: "y61RJm4BYLg",
  description:
    "A worked example showing how the Fundamental Theorem of Calculus Part I is applied in practice."
},

  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "ftc-1-chain-rule-calc-1",
  section: "Fundamental Theorem of Calculus",
  topic: "FTC I",
  title: "FTC I + Chain Rule + Calc I",
  youtubeId: "AmIWNoOl488",
  description:
    "A worked example connecting the Fundamental Theorem of Calculus Part I with the Chain Rule and key ideas from Calculus I."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "ftc-ii-in-action",
  section: "Fundamental Theorem of Calculus",
  topic: "FTC II",
  title: "FTC II in Action",
  youtubeId: "G1nSApajp1M",
  description:
    "A worked example showing how the Fundamental Theorem of Calculus Part II is applied to evaluate definite integrals."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "u-substitution-definite-integrals-two-methods",
  section: "Integration Techniques",
  topic: "Substitution",
  title: "u-Substitution with Definite Integrals: Two Methods",
  youtubeId: "AwCBc921EMI",
  description:
    "A comparison of two methods for applying u-substitution to definite integrals: changing the bounds and converting back to the original variable."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "substitution-which-one-to-choose",
  section: "Integration Techniques",
  topic: "Substitution",
  title: "Substitution – Which One to Choose?",
  youtubeId: "cIM1nn-xpjo",
  description:
    "A guide to choosing an effective substitution when evaluating integrals, with emphasis on recognizing useful inner functions."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "trigonometric-substitution",
  section: "Integration Techniques",
  topic: "Trigonometric Substitution",
  title: "Trigonometric Substitution",
  youtubeId: "HhA405T7B5c",
  description:
    "An introduction to trigonometric substitution and how to recognize and apply appropriate substitutions when evaluating integrals."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "choosing-functions-integration-by-parts",
  section: "Integration Techniques",
  topic: "Integration by Parts",
  title: "Choosing Functions with Integration by Parts",
  youtubeId: "8efFJBBMfqE",
  description:
    "A guide to choosing the functions f and g' when applying integration by parts."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "id-method-example-1",
  section: "Integration Techniques",
  topic: "Integration by Parts",
  title: "ID Method Example 1",
  youtubeId: "5xkmZ7aCEO8",
  description:
    "A worked example using the ID method as a quick approach to integration by parts."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "id-method-example-2",
  section: "Integration Techniques",
  topic: "Integration by Parts",
  title: "ID Method Example 2",
  youtubeId: "8UXJ0RnAnsc",
  description:
    "A second worked example using the ID method as a quick approach to integration by parts."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "id-method-example-3",
  section: "Integration Techniques",
  topic: "Integration by Parts",
  title: "ID Method Example 3",
  youtubeId: "NiGaEyXPp0s",
  description:
    "A third worked example using the ID method as a quick approach to integration by parts."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "partial-fraction-decomposition",
  section: "Integration Techniques",
  topic: "Partial Fractions",
  title: "Partial Fraction Decomposition",
  youtubeId: "x7U7FW1rTI8",
  description:
    "An introduction to partial fraction decomposition and how it can be used to rewrite rational functions in a form that is easier to integrate."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "p-integrals-and-convergence",
  section: "Improper Integrals",
  topic: "Improper Integrals",
  title: "p-Integrals and Convergence",
  youtubeId: "UPuLCNU0qQI",
  description:
    "An introduction to p-integrals and the conditions that determine whether an improper integral converges or diverges."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "improper-integral-negative-infinity-to-infinity-part-1",
  section: "Improper Integrals",
  topic: "Improper Integrals",
  title: "Improper Integral over (-∞, ∞): Part I",
  youtubeId: "73HOJIuWBsc",
  description:
    "An introduction to evaluating improper integrals over the entire real line by splitting the integral into two improper integrals."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "improper-integral-negative-infinity-to-infinity-part-2",
  section: "Improper Integrals",
  topic: "Improper Integrals",
  title: "Improper Integral over (-∞, ∞): Part II",
  youtubeId: "0Gr3hmM3yHY",
  description:
    "A continuation of improper integrals over the entire real line, with another worked example involving convergence."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "choosing-the-right-volume-formula",
  section: "Applications of Integration",
  topic: "Volumes",
  title: "Choosing the Right Volume Formula",
  youtubeId: "Yf8mHOcqW3g",
  description:
    "A guide to choosing an appropriate volume formula when setting up solids of revolution."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "disk-versus-washer-method",
  section: "Applications of Integration",
  topic: "Volumes",
  title: "Disk versus Washer Method",
  youtubeId: "VoMGShMb1FE",
  description:
    "A comparison of the disk and washer methods for finding volumes of solids of revolution, with guidance on when to use each method."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "shell-method",
  section: "Applications of Integration",
  topic: "Volumes",
  title: "Shell Method",
  youtubeId: "tIlx5vlsYPk",
  description:
    "An introduction to the shell method for finding volumes of solids of revolution, including how to set up the corresponding integral."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "sequences-series-partial-sums",
  section: "Numerical Series",
  topic: "Sequences and Series",
  title: "Sequences, Series, and Partial Sums",
  youtubeId: "ZTHJBFw_UpU",
  description:
    "An introduction to sequences, infinite series, and partial sums, with a focus on how partial sums are used to understand convergence."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "convergence-sequence-versus-series",
  section: "Numerical Series",
  topic: "Convergence",
  title: "Convergence of Sequence versus Convergence of Series",
  youtubeId: "yzXqQt_dpRQ",
  description:
    "A comparison of sequence convergence and series convergence, emphasizing the role of partial sums in determining whether an infinite series converges."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "geometric-series-converge-or-diverge",
  section: "Numerical Series",
  topic: "Geometric Series",
  title: "Geometric Series: Converge or Diverge",
  youtubeId: "6wFRS2l-BIU",
  description:
    "Worked examples using the Geometric Series Test to determine whether a series converges or diverges and, when it converges, to find its sum."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "choosing-the-right-series-test",
  section: "Numerical Series",
  topic: "Convergence Tests",
  title: "Choosing the Right Test with Series",
  youtubeId: "17peHUlHhVI",
  description:
    "A guide to choosing an appropriate convergence test for an infinite series based on the form and structure of its terms."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "telescoping-series",
  section: "Numerical Series",
  topic: "Telescoping Series",
  title: "Telescoping Series",
  youtubeId: "tM1JWD7YDAA",
  description:
    "An introduction to telescoping series, focusing on how terms cancel in partial sums and how this structure helps determine convergence and the sum of the series."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "integral-test",
  section: "Numerical Series",
  topic: "Integral Test",
  title: "Integral Test",
  youtubeId: "llHaWJkwh5U",
  description:
    "An introduction to the Integral Test for determining whether an infinite series converges or diverges by comparing it with a related improper integral."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "comparison-test",
  section: "Numerical Series",
  topic: "Comparison Test",
  title: "Comparison Test",
  youtubeId: "h5rOnvoyZtw",
  description:
    "An introduction to the Comparison Test for determining convergence or divergence by comparing a series with another series whose behavior is already known."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "limit-comparison-test",
  section: "Numerical Series",
  topic: "Limit Comparison Test",
  title: "Limit Comparison Test",
  youtubeId: "gDCKFE3jlUg",
  description:
    "An introduction to the Limit Comparison Test for determining convergence or divergence by comparing a series with a simpler benchmark series."
},{
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "absolute-versus-conditional-convergence",
  section: "Numerical Series",
  topic: "Absolute and Conditional Convergence",
  title: "Absolute versus Conditional Convergence",
  youtubeId: "1oA5O3MxnCk",
  description:
    "An explanation of the difference between absolute and conditional convergence, including how convergence of the absolute-value series relates to convergence of the original series."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "proof-with-convergence-of-series",
  section: "Numerical Series",
  topic: "Convergence of Series",
  title: "Proof with Convergence of Series",
  youtubeId: "ycHSiGn_ZIw",
  description:
    "A proof-based exploration of convergence of infinite series, emphasizing how partial sums are used to justify convergence results."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "understanding-multivariable-functions",
  section: "Functions of Several Variables",
  topic: "Multivariable Functions",
  title: "Understanding Multivariable Functions",
  youtubeId: "i_O9CJ8RGls",
  description:
    "An introduction to multivariable functions and how to interpret functions of two variables."
},

{
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "level-curves",
  section: "Functions of Several Variables",
  topic: "Level Curves",
  title: "Level Curves",
  youtubeId: "7gMzQ7-qAys",
  description:
    "An introduction to level curves and how they help visualize functions of two variables."
},

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "cross-sections",
  section: "Functions of Several Variables",
  topic: "Cross Sections",
  title: "Cross Sections",
  youtubeId: "7V5kwhb2UuI",
  description:
    "An introduction to cross sections and how they help visualize surfaces defined by functions of two variables."
}, 
  
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "direct-substitution-multivariable-limits",
  section: "Multivariable Limits",
  topic: "Limits",
  title: "Direct Substitution with Multivariable Limits",
  youtubeId: "6QYiXivUINc",
  description:
    "A worked example showing how to evaluate a multivariable limit using direct substitution when the function is continuous at the point."
}, 

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "multivariable-limit-dne",
  section: "Multivariable Limits",
  topic: "Limits",
  title: "Multivariable Limit DNE",
  youtubeId: "7poFr_0UwGo",
  description:
    "A worked example showing how to prove that a multivariable limit does not exist by comparing different paths of approach."
}, 

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "multivariable-limit-squeeze-theorem",
  section: "Multivariable Limits",
  topic: "Limits",
  title: "Multivariable Limit Using the Squeeze Theorem",
  youtubeId: "luXoC6ZqtFc",
  description:
    "A worked example showing how to prove that a multivariable limit exists using the Squeeze Theorem."
}, 

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "testing-limits-continuity-different-paths",
  section: "Multivariable Limits",
  topic: "Limits and Continuity",
  title: "Testing Limits and Continuity with Different Paths",
  youtubeId: "_PSV22Jckow",
  description:
    "A worked example using multiple paths to test whether a multivariable limit exists and to determine continuity at a point."
}, {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "geometric-meaning-of-partial-derivatives",
  section: "Partial Derivatives",
  topic: "Partial Derivatives",
  title: "Geometric Meaning of Partial Derivatives",
  youtubeId: "aEzq_jrQNas",
  description:
    "A geometric interpretation of partial derivatives using tangent slopes along cross sections of a surface."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "first-order-partial-derivatives",
  section: "Partial Derivatives",
  topic: "Partial Derivatives",
  title: "First-Order Partial Derivatives",
  youtubeId: "hcXwsFnMaDE",
  description:
    "An introduction to first-order partial derivatives and how to differentiate a multivariable function with respect to one variable at a time."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "partial-derivatives-and-derivative-rules",
  section: "Partial Derivatives",
  topic: "Partial Derivatives",
  title: "Partial Derivatives and Derivative Rules",
  youtubeId: "N0L56b_lwss",
  description:
    "A worked example applying familiar derivative rules to compute partial derivatives of multivariable functions."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "second-order-partials-and-notation",
  section: "Partial Derivatives",
  topic: "Partial Derivatives",
  title: "Second-Order Partials and Notation",
  youtubeId: "k21pbT8q8I8",
  description:
    "An introduction to second-order partial derivatives and the notation used to represent them."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "equation-of-a-tangent-plane",
  section: "Partial Derivatives",
  topic: "Tangent Planes",
  title: "Equation of a Tangent Plane",
  youtubeId: "r9wKlV-ZOy0",
  description:
    "A worked example showing how to find the equation of a tangent plane to a surface using partial derivatives."
}, {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "finding-the-hessian-matrix",
  section: "Partial Derivatives",
  topic: "Hessian Matrix",
  title: "Finding the Hessian Matrix",
  youtubeId: "zHatEfWAxpQ",
  description:
    "A worked example showing how to construct the Hessian matrix from second-order partial derivatives."
}, 
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "chain-rule-simple-example",
  section: "Chain Rule",
  topic: "Chain Rule",
  title: "Chain Rule Simple Example",
  youtubeId: "6U-OanLcxec",
  description:
    "A simple worked example illustrating how to apply the multivariable Chain Rule."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "partial-versus-regular-derivative-chain-rule",
  section: "Chain Rule",
  topic: "Chain Rule",
  title: "Partial versus Regular Derivative in Chain Rule",
  youtubeId: "3Xk9eCesUgw",
  description:
    "An explanation of when partial derivatives and regular derivatives appear when applying the multivariable Chain Rule."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "gradient-vector-properties-directional-derivative",
  section: "Directional Derivatives and Gradient",
  topic: "Gradient Vector",
  title: "Gradient Vector Properties and Directional Derivative",
  youtubeId: "76XPDqm4Cfg",
  description:
    "An explanation of key properties of the gradient vector and its connection to directional derivatives."
},{
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "finding-error-linear-approximation-part-1",
  section: "Linear Approximation",
  topic: "Linear Approximation",
  title: "Finding Error: Linear Approximation Part I",
  youtubeId: "9gs5RIa3_Q0",
  description:
    "An introduction to finding the error in a linear approximation by comparing the approximation with the actual function value."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "finding-error-linear-approximation-part-2",
  section: "Linear Approximation",
  topic: "Linear Approximation",
  title: "Finding Error: Linear Approximation Part II",
  youtubeId: "lZxDCtHUnHY",
  description:
    "A continuation of finding error in linear approximation, with additional examples comparing the approximation to the actual function value."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "lagrange-multiplier-algorithm-example-1",
  section: "Optimization",
  topic: "Lagrange Multipliers",
  title: "Optimization with Lagrange Multiplier Algorithm Example 1",
  youtubeId: "EGspl9UGs3M",
  description:
    "A worked example applying the Lagrange Multiplier algorithm to solve a constrained optimization problem."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "lagrange-multiplier-algorithm-example-2",
  section: "Optimization",
  topic: "Lagrange Multipliers",
  title: "Optimization with Lagrange Multiplier Algorithm Example 2",
  youtubeId: "RPsZ5vDWKDk",
  description:
    "A second worked example applying the Lagrange Multiplier algorithm to solve a constrained optimization problem."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "polar-equations-and-their-graphs",
  section: "Polar Coordinates",
  topic: "Polar Equations and Graphs",
  title: "Polar Equations and Their Graphs",
  youtubeId: "9q3hifqdCQs",
  description:
    "An introduction to interpreting polar equations and sketching their graphs, with emphasis on understanding how values of \\(r\\) and \\(\\theta\\) determine points in the polar plane."
},
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "cylindrical-and-spherical-coordinates",
  section: "Coordinate Systems",
  topic: "Cylindrical and Spherical Coordinates",
  title: "Cylindrical and Spherical Coordinates",
  youtubeId: "8fvzSYHrJ8E",
  description:
    "An introduction to cylindrical and spherical coordinate systems, including how points and equations are represented and related to Cartesian coordinates."
}
];
