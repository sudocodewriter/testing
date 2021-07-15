function mandelbrot(cplx) {
    let z = new Complex(0,0);
    
    let in_set = false;
    for (let count = 0; z.mag() <= 2; count++) {
      z = (z.mul(z)).add(cplx); // z = z^2 + cplx
      if (count > ITER_CONST) {
        in_set = true;
        break;
      }
    }
  
    return in_set;
  }