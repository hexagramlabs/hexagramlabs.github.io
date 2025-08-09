---
title: "Hello World"
date: 2025-08-02
---
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas 
molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et 
dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et 
aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum 
hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.




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

