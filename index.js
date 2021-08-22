function superbowlWin(superWin){
    let win = superWin.find(item => item.result === 'W');
    if(!!win){
        return win.year
    }
    //return win.year
}
   



