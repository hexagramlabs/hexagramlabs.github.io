---
title: "Hello World"
date: 2025-08-02
Description: "A Hello World test metadescription"
tags: ["hugo", "blogging", "tutorial"]
---
# Heading 1

Lorem ipsum dolor sit amet,[^1] consectetur adipiscing elit. Pellentesque scelerisque venenatis suscipit. Donec elementum, quam sit amet dapibus semper, ante ligula ultrices nunc, et tempus arcu velit at sem. Nunc finibus, enim sed gravida sagittis, urna nulla mollis orci, sit amet viverra tortor metus eget mauris. Aliquam convallis, mi in pharetra condimentum, dolor arcu efficitur nisl, in sollicitudin odio diam nec quam. Integer non metus nec sem tristique hendrerit. Nunc diam elit, interdum non dolor nec, vulputate suscipit erat. Curabitur faucibus, justo vel sollicitudin tempor, leo metus ultrices massa, non dignissim neque nisi ac dui. Suspendisse dignissim, felis sit amet egestas semper, nisl arcu placerat nibh, a luctus tellus arcu ut orci. Ut arcu turpis, facilisis ut odio vitae, lobortis sollicitudin metus. Curabitur non fringilla nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque dapibus nibh ante, fermentum lacinia odio ultrices dapibus. Mauris pretium tempus sapien, at laoreet velit tempor eu. Cras a odio laoreet, fermentum enim eget, tristique risus.

>Nullam auctor laoreet neque, vel efficitur nibh finibus id. Nunc ultricies, nisi et suscipit sagittis, elit urna pellentesque eros, quis vulputate nunc velit quis metus. Suspendisse iaculis pretium sem, in elementum massa consectetur vitae. Duis eu erat sit amet orci volutpat aliquet. Donec sodales scelerisque ultricies. Etiam a luctus ex. Quisque orci tortor, aliquet ut convallis at, lacinia in metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tincidunt, nisi eu tincidunt rutrum, dolor est maximus diam, eget malesuada metus nulla et ipsum. Aliquam nunc enim, tristique vitae lacinia in, vulputate et nisi.

## Heading 2

Here's some LaTeX:

{{< math >}}
a_{0} + a_{0}a_{1} + a_{0}a_{1}a_{2} + \cdots + a_{0}a_{1}a_{2} \cdots a_{n} = \cfrac{a_{0}}{1 - \cfrac{a_{1}}{1 + a_{1} - \cfrac{a_{2}}{1 + a_{2} - \cfrac{\ddots}{\ddots \cfrac{a_{n-1}}{1 + a_{n-1} - \cfrac{a_{n}}{1 + a_{n}}}}}}}
{{< /math >}}







```lisp
(defun cont-frac (n d k)
  (labels ((iter (i result)
             (if (= i 0)
                 result
                 (iter (- i 1) (/ (funcall n i) (+ (funcall d i) result))))))
    (iter k 0)))

(format t "~a" (cont-frac (lambda (i) 1.0) (lambda (i) 1.0) 10))
```
### Heading 3

What if we also wanted some in-line LateX? We could write an inline equation: {{< math >}}$E = mc^2${{< /math >}}. That's possible with $ delimiters. Or perhaps some inline code? Well, that is possible too, by using single backticks. Consider the above Lisp magic. We can explain how it works and use backticks to highlight its parts.

This Lisp code defines a function `cont-frac`, which computes a continued fraction. The function uses the helper `iter`, defined inside `cont-frac` using `labels` for local recursion to iterate and calculate the fraction.

We write a `lambda` function to handle the numerator and denominator values, which are then passed back as functions rather than values. The `iter` function is where the magic happens. It keeps calling itself with a reduced iteration count `(i - 1)`, counting down until `i` has reached `0`. And at each step, it computes a fraction. 

The program terminates and outputs our final value when the lamdba's index hits `0`. Basically the Lisp interpreter is being told, "hey, simulate 10 iterations of `1 / (1 + 1 / (1 + 1 /...))`" by the lambda function.


{{< img 
    url="/images/alice.webp" 
    class="centered-image"
    scale="70"
    lightbox="true"
>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,[^2] quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.[^3] Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

[^1]: This is the first footnote. You can put any Markdown content here, including **bold** or _italic_ text.
[^2]: You better believe this is the second footnote, referencing something mildly 
relevant. 
[^3]: And this is the third and final footnote, perhaps linking to [an external 
resource](https://example.com).


