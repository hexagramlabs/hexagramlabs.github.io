---
title: "Hello World"
date: 2025-08-02
Description: "A Hello World test metadescription"
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque venenatis suscipit. Donec elementum, quam sit amet dapibus semper, ante ligula ultrices nunc, et tempus arcu velit at sem. Nunc finibus, enim sed gravida sagittis, urna nulla mollis orci, sit amet viverra tortor metus eget mauris. Aliquam convallis, mi in pharetra condimentum, dolor arcu efficitur nisl, in sollicitudin odio diam nec quam. Integer non metus nec sem tristique hendrerit. Nunc diam elit, interdum non dolor nec, vulputate suscipit erat. Curabitur faucibus, justo vel sollicitudin tempor, leo metus ultrices massa, non dignissim neque nisi ac dui. Suspendisse dignissim, felis sit amet egestas semper, nisl arcu placerat nibh, a luctus tellus arcu ut orci. Ut arcu turpis, facilisis ut odio vitae, lobortis sollicitudin metus. Curabitur non fringilla nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque dapibus nibh ante, fermentum lacinia odio ultrices dapibus. Mauris pretium tempus sapien, at laoreet velit tempor eu. Cras a odio laoreet, fermentum enim eget, tristique risus.

>Aenean sit amet vulputate urna. Praesent eget consectetur quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras metus quam, imperdiet et augue pretium, gravida sagittis est. Curabitur suscipit luctus tincidunt. Quisque porttitor justo dictum, molestie urna quis, pellentesque nisi. Etiam placerat euismod maximus. Nulla congue vestibulum velit in rhoncus. Donec ullamcorper sapien eu nisl ultricies, nec fringilla lectus aliquam. Aliquam nunc justo, blandit a commodo vitae, vulputate scelerisque enim.



$$
a_{0} + a_{0}a_{1} + a_{0}a_{1}a_{2} + \cdots + a_{0}a_{1}a_{2} \cdots a_{n} = \cfrac{a_{0}}{1 - \cfrac{a_{1}}{1 + a_{1} - \cfrac{a_{2}}{1 + a_{2} - \cfrac{\ddots}{\ddots \cfrac{a_{n-1}}{1 + a_{n-1} - \cfrac{a_{n}}{1 + a_{n}}}}}}}
$$



```lisp
(defun cont-frac (n d k)
  (labels ((iter (i result)
             (if (= i 0)
                 result
                 (iter (- i 1) (/ (funcall n i) (+ (funcall d i) result))))))
    (iter k 0)))

(format t "~a" (cont-frac (lambda (i) 1.0) (lambda (i) 1.0) 10))
```

What if we also wanted some in-line code? Well, that is possible too, by using single backticks. Consider the above lisp magic. We can explain how it works and use backticks to highlight its parts.

This Lisp code defines a function `cont-frac`, which computes a continued fraction. The function uses the helper `iter`, defined inside `cont-frac` using `labels` for local recursion to iterate and calculate the fraction.

We write a `lambda` function to handle the numerator and denominator values, which are then passed back as functions rather than values. The `iter` function is where the magic happens. It keeps calling itself with a reduced iteration count `(i - 1)`, counting down until `i` has reached `0`. And at each step, it computes a fraction. 

The program terminates and outputs our final value when the lamdba's index hits `0`. Basically the Lisp interpreter is being told, "hey, simulate 10 iterations of `1 / (1 + 1 / (1 + 1 /...))`" by the lambda function.


{{< img 
    url="/images/alice.jpg" 
    class="centered-image"
    scale="80"
    lightbox="true"
>}}

