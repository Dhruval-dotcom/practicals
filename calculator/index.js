let set = 1;
let memory = 0;
let screen_expr = "",
  eval_expr = "";

function displayans(d) {
  document.getElementById("h1").innerHTML = d;
}
function appendans(d) {
  document.getElementById("h1").innerHTML += d;
}
function ans() {
  return document.getElementById("h1").innerHTML;
}

//function checking is it an operator
function isop(x) {
  reg = /^[*/+-]$/;
  return reg.test(x);
}

//function checking is it a bracket
function isbrac(x) {
  return x == "(" || x == ")";
}

//include multipy last
function includemul() {
  screen_expr += "&#215;";
  eval_expr += "*";
  appendans("&#215");
}

//factorial
function fact(n) {
  return n == 1 ? 1 : n * fact(n - 1);
}

//appending digits
function digit(d) {
  if (d == "dot") {
    if (/^[0-9]$/.test(eval_expr[eval_expr.length - 1]) == true) {
      screen_expr += ".";
      eval_expr += ".";
      appendans(".");
    }
  } else {
    if (set == 1) {
      set = 0;
      displayans(d);
      screen_expr = eval_expr = d;
    } else {
      screen_expr += d;
      eval_expr += d;
      appendans(d);
    }
  }
}

//backspace
function bsp() {
  h1 = ans();
  disp1 = document.getElementById("display1").innerHTML;
  if (h1.length == 1) {
    set = 1;
    displayans("0");
    screen_expr = eval_expr = "";
  } else {
    eval_expr = eval_expr.substring(0, eval_expr.length - 1);
    displayans(h1.substring(0, h1.length - 1));
    screen_expr = ans();
  }
}

//clear function
function clearans() {
  set = 1;
  displayans("0");
  document.getElementById("display1").innerHTML = "";
  screen_expr = eval_expr = "";
}

//when operators entered
function operators(op) {
  if (set == 1) {
    if (op == "-") {
      set = 0;
      displayans(op);
      screen_expr = eval_expr = ans();
    }
  } else {
    switch (op) {
      case "+":
        eval_expr += "+";
        appendans("+");
        screen_expr = ans();
        break;
      case "-":
        eval_expr += "-";
        appendans("-");
        screen_expr = ans();
        break;
      case "*":
        appendans("&#215;");
        screen_expr = ans();
        eval_expr += "*";
        break;
      case "÷":
        appendans("÷");
        screen_expr = ans();
        eval_expr += "/";
        break;
      case "%":
        appendans("mod");
        screen_expr = ans();
        eval_expr += "%";
        break;
      case "pow":
        appendans("^");
        screen_expr = ans();
        eval_expr += "**";
        break;
      case "tenpow":
        appendans("&#215;10^");
        screen_expr = ans();
        eval_expr += "*10**";
        break;
      case "sqr":
        appendans("^2");
        screen_expr = ans();
        eval_expr += "**2";
        break;
      case "cube":
        appendans("^3");
        screen_expr = ans();
        eval_expr += "**3";
        break;
      case "e":
        appendans("e+");
        screen_expr = ans();
        eval_expr += "e";
        break;
    }
  }
}

//for appending bracket if user has not added
function appendbracket() {
  if (eval_expr.lastIndexOf("(") > eval_expr.lastIndexOf(")")) {
    screen_expr += ")";
    eval_expr += ")";
  }
}

//when = pressed
function equal() {
  eval_expr = eval_expr.replaceAll("cosec", "1/Math.sin");
  eval_expr = eval_expr.replaceAll("sin", "Math.sin");
  eval_expr = eval_expr.replaceAll("cos", "Math.cos");
  eval_expr = eval_expr.replaceAll("tan", "Math.tan");
  eval_expr = eval_expr.replaceAll("sec", "1/Math.cos");
  eval_expr = eval_expr.replaceAll("cot", "1/Math.tan");
  eval_expr = eval_expr.replaceAll("log", "Math.log");
  eval_expr = eval_expr.replaceAll("floor", "Math.floor");
  eval_expr = eval_expr.replaceAll("ceil", "Math.ceil");
  eval_expr = eval_expr.replaceAll("round", "Math.round");
  eval_expr = eval_expr.replaceAll("Math.Math.", "Math.");

  appendbracket();

  try {
    document.getElementById("display1").innerHTML = screen_expr;
    displayans(eval(eval_expr));
  } catch (e) {
    if (e instanceof SyntaxError) {
      document.getElementById("display1").innerHTML = screen_expr;
      document.getElementById("h1").innerHTML = "Error";
    } else {
      document.getElementById("display1").innerHTML = screen_expr;
      document.getElementById("h1").innerHTML = "Error";
    }
  }
}

//for all math related functions
function maths(p) {
  switch (p) {
    case "sine":
      x = "sin(";
      y = "Math.sin(";
      break;
    case "cosine":
      x = "cos(";
      y = "Math.cos(";
      break;
    case "tangent":
      x = "tan(";
      y = "Math.tan(";
      break;
    case "cosec":
      x = "cosec(";
      y = "1/Math.sin(";
      break;
    case "sec":
      x = "sec(";
      y = "1/Math.cos(";
      break;
    case "cot":
      x = "cot(";
      y = "1/Math.tan(";
      break;
    case "log":
      x = "log(";
      y = "Math.log(";
      break;
    case "logten":
      x = "log(";
      y = "Math.log10(";
      break;
    case "abs":
      x = "abs(";
      y = "Math.abs(";
      break;
    case "floor":
      x = "floor(";
      y = "Math.floor(";
      break;
    case "ceil":
      x = "ceil(";
      y = "Math.ceil(";
      break;
    case "round":
      x = "round(";
      y = "Math.round(";
      break;
    case "pow":
      x = "^";
      y = "**";
      break;
    case "sqrt":
      x = "sqrt(";
      y = "Math.sqrt(";
      break;
    case "cbrt":
      x = "cbrt(";
      y = "Math.cbrt(";
      break;
    case "recip":
      x = "reciproc(";
      y = "1/(";
      break;
    case "asin":
      x = "sin<sup>-1</sup>(";
      y = "Math.asin(";
      break;
    case "acos":
      x = "cos<sup>-1</sup>(";
      y = "Math.acos(";
      break;
    case "atan":
      x = "tan<sup>-1</sup>(";
      y = "Math.atan(";
      break;
    case "acosec":
      x = "sin<sup>-1</sup>(";
      y = "Math.asin(1/";
      break;
    case "asec":
      x = "sec<sup>-1</sup>(";
      y = "Math.acos(1/";
      break;
    case "acot":
      x = "cot<sup>-1</sup>(";
      y = "Math.atan(1/";
      break;
  }
  if (set == 1) {
    set = 0;
    displayans(x);
    screen_expr = x;
    eval_expr = y;
  } else {
    if (/^[0-9]$/.test(eval_expr[eval_expr.length - 1])) {
      appendans("&#215;" + x);
      screen_expr += "&#215;" + x;
      eval_expr += "*" + y;
    } else {
      appendans(x);
      screen_expr += x;
      eval_expr += y;
    }
  }
}

//for pi and e
function numb(n) {
  if (set == 1) {
    set = 0;
    displayans(n == "3.14" ? "π" : "e");
    screen_expr = n == "3.14" ? "π" : "e";
    eval_expr = n;
  } else {
    if (
      isop(eval_expr[eval_expr.length - 1]) ||
      isbrac(eval_expr[eval_expr.length - 1])
    ) {
      screen_expr += n == "3.14" ? "π" : "e";
      eval_expr += n;
      appendans(n == "3.14" ? "π" : "e");
    } else {
      screen_expr += n == "3.14" ? "&#215;π" : "&#215;e";
      eval_expr += "*" + n;
      appendans(n == "3.14" ? "&#215;π" : "&#215;e");
    }
  }
}

//for factorial
function factorial() {
  if (
    eval_expr.includes("+") ||
    eval_expr.includes("*") ||
    eval_expr.includes("/") ||
    eval_expr.includes("-")
  ) {
    for (var i = eval_expr.length - 1; i >= 0; i--) {
      if (
        eval_expr[i] == "*" ||
        eval_expr[i] == "-" ||
        eval_expr[i] == "/" ||
        eval_expr[i] == "-"
      )
        break;
    }
    x = eval_expr.substring(i + 1, eval_expr.length);
    eval_expr = eval_expr.substring(0, i + 1) + fact(parseInt(x)).toString();
    screen_expr =
      screen_expr.substring(0, i + 1) + fact(parseInt(x)).toString();
    displayans(screen_expr);
  } else {
    if (set == 1) {
      screen_expr = "0!";
      displayans("0!");
      eval_expr = "1";
      set = 0;
    } else {
      screen_expr += "!";
      appendans("!");
      eval_expr = fact(parseInt(eval_expr)).toString();
    }
  }
}

//for all memory related functions
function mem(m) {
  switch (m) {
    case "mp":
      memory += eval(eval_expr);
      break;
    case "mm":
      memory -= eval(eval_expr);
      break;
    case "mc":
      memory = 0;
      break;
    case "mr":
      displayans(memory.toString());
      break;
    case "ms":
      memory = parseInt(eval(eval_expr));
      break;
  }
}

//for +/-
function pm() {
  for (var j = eval_expr.length - 1; j >= 0; j--) {
    if (/^[*+-/]$/.test(eval_expr[j])) break;
  }
  if (j == -1) {
    screen_expr = "-" + screen_expr;
    eval_expr = "-" + eval_expr;
    displayans(screen_expr);
  } else {
    if (eval_expr[j] == "-") {
      screen_expr =
        screen_expr.substring(0, j) +
        "+" +
        screen_expr.substring(j + 1, screen_expr.length);
      eval_expr =
        eval_expr.substring(0, j) +
        "+" +
        eval_expr.substring(j + 1, eval_expr.length);
      displayans(screen_expr);
    } else if (eval_expr[j] == "+") {
      screen_expr =
        screen_expr.substring(0, j) +
        "-" +
        screen_expr.substring(j + 1, screen_expr.length);
      eval_expr =
        eval_expr.substring(0, j) +
        "-" +
        eval_expr.substring(j + 1, eval_expr.length);
      displayans(screen_expr);
    } else {
      screen_expr =
        screen_expr.substring(0, j + 1) +
        "-" +
        screen_expr.substring(j + 1, screen_expr.length);
      eval_expr =
        eval_expr.substring(0, j + 1) +
        "-" +
        eval_expr.substring(j + 1, eval_expr.length);
      displayans(screen_expr);
    }
  }
}

//keypress event
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/^[0-9.()]$/.test(key)) {
    digit(key);
  } else if (/^[+-/*%^]$/.test(key)) {
    operators(key == "^" ? "pow" : key);
  } else {
    switch (key) {
      case "Enter":
        equal();
        break;
      case "Backspace":
        bsp();
        break;
      case "!":
        factorial();
        break;
      default:
        keyarr = [
          "Alt",
          "Shift",
          "Tab",
          "CapsLock",
          "Control",
          "Escape",
          "Insert",
          "Delete",
          "End",
          "PageDown",
          "PageUp",
          "ArrowRight",
          "ArrowLeft",
          "ArrowDown",
          "ArrowUp",
          "Home",
          "ScrollLock",
          "NumLock",
          "Pause",
        ];
        if (!keyarr.includes(key)) {
          if (set == 1) {
            set = 0;
            displayans(key);
            screen_expr = key;
            eval_expr = key;
          } else {
            appendans(key);
            screen_expr += key;
            eval_expr += key;
          }
        }
    }
  }
});
