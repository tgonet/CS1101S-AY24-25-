import {circle, square, show, stack, beside,ribbon, blank, beside_frac,stack_frac} from 'rune';

function moon(rune){
    return beside(stack(circle,square), stack(blank, rune));
}

function moon2(steps){
    return steps === 1 ? circle : moon(moon2(steps-1));
}

function moons(n){
    return n===1?circle: beside_frac(1/n,stack_frac(1/n,circle,square),stack_frac(1/n,blank,moons(n-1)));
}

//show(moon(ribbon));
show(moon2(5));