function every_second(lists){
    return helper(0,lists,list(0,0));
}

function helper(count,list1, empty){
    return !is_null(list1) ? count % 2 === 0 ? 
    helper(count+1,tail(list1), pair(head(empty) + head(list1), tail(empty))) : 
    helper(count+1,tail(list1), 
    pair(head(empty), pair(head(tail(empty)) + head(list1), null))) : empty ;
}

//length(list("a", "x", "b", "y", "c", "z", "d"));
every_second(list(1, 2, 3, 4, 5));

