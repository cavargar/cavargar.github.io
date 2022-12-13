---
layout: page    
title: research
permalink: /research/
nav: true
---

## Single-cell size dynamics
Imagine a single cell growing at a given rate and then, suddenly out of blue, it divides its size in two. Is this random? is there an internal clock, a size sensing mechanisms or any control that fires such abrupt change? 

Let the cell size $$s$$ grow exponentially according to the equation 

$$\frac{ds}{dt}=\alpha s, \, s(0)=s_0,$$ 

where $$\alpha$$ is the growth rate, $$s_0$$ is the initial cell size, and $$t$$ is the experiment time. Also, let the cell cycle time $$\tau$$ be the time it takes for a cell to grow and divide. The cell cycle progress is represented by the equation 

$$\frac{d\tau}{dt}=1, \, \tau(0)=0.$$

A division event occurs when a cell splits into two daughter cells. This event resets both the cell size to half and the cell cycle time to zero, that is, 

$$ s \mapsto s / 2, \quad \tau \mapsto 0,$$

marking the end of one cycle and the start of a new one. Let $$P(\tau)$$ define when division happens as per 

$$P(\tau)=U(\tau-\bar{\tau})=\begin{cases}
    1,  \text{ if } \tau > \bar{\tau} \\
    0,  \text{ otherwise,}
\end{cases}$$ 

where $$U(\tau-\bar{\tau})$$ is the unit step function and $$\bar{\tau}$$ is the time to division since the start of the cell cycle. Cell performs a division event if $$P(\tau)=1$$. 

The division rate can be defined as 

$$\begin{aligned}
    p(\tau)&=\frac{d P}{d\tau}\\
    &=\delta(\tau-\bar{\tau}),
\end{aligned}$$ 

where $$\delta(\tau)$$ is the *Delta Dirac* function.  The above description is summarized using graph or automata notation

![Automata notation](https://github.com/cavargar/cavargar.github.io/blob/master/assets/img/hsys.png)
