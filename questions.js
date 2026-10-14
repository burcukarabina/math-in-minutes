const questions = [

  {
    course: "calculus-2",
    section: "Integration Techniques",
    id: "integration-method-1",
    type: "multiple-choice",

      question:
  "Which integration technique is most appropriate for \\(\\int x e^x\\,dx\\)?"

    choices: [
      "u-Substitution",
      "Integration by Parts",
      "Trigonometric Substitution",
      "Partial Fractions"
    ],

    correct: 1,

    explanation:
      "Integration by Parts is appropriate because the integrand is a product of an algebraic function and an exponential function."
  },


  {
    course: "calculus-2",
    section: "Improper Integrals",
    id: "p-integral-1",
    type: "multiple-choice",

      question:
  "For which values of \\(p\\) does \\(\\displaystyle \\int_1^\\infty \\frac{1}{x^p}\\,dx\\) converge?"

   choices: [
  "\\(p>0\\)",
  "\\(p\\ge 1\\)",
  "\\(p>1\\)",
  "\\(p<1\\)"
]

    correct: 2,

    explanation:
      "The p-integral ∫₁^∞ 1/x^p dx converges precisely when p > 1."
  },


  {
  course: "calculus-2",
  section: "Fundamental Theorem of Calculus",
  id: "ftc-1",
  type: "multiple-choice",

  question:
    "If \\(F(x)=\\displaystyle\\int_0^x f(t)\\,dt\\) and \\(f\\) is continuous, what is \\(F'(x)\\)?",

  choices: [
    "\\(f(0)\\)",
    "\\(f(x)\\)",
    "\\(\\displaystyle\\int_0^x f'(t)\\,dt\\)",
    "\\(x f(x)\\)"
  ],

  correct: 1,

  explanation:
    "By the Fundamental Theorem of Calculus Part I, \\(F'(x)=f(x)\\)."
}

];
