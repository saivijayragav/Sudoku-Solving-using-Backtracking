const puzzle = [[0,0,0,0,0,6,0,0,3],
              [0,0,0,0,1,0,4,0,0],
              [0,4,0,8,0,0,0,7,9],
              [8,0,9,0,7,0,0,6,0],
              [0,6,0,0,8,0,0,0,5],
              [0,5,7,0,3,0,8,0,0],
              [2,0,0,1,0,9,0,0,0],
              [0,0,0,5,0,3,0,0,0],
              [0,0,0,0,0,0,6,0,0]]
var copy = JSON.parse(JSON.stringify(puzzle));
var copy2 = JSON.parse(JSON.stringify(puzzle));
for(i=0; i < 9;i++){
for(j=0;j<9;j++){
    if(puzzle[i][j] != 0){
        var a = (i * 9)+j+1;
        var ele = document.getElementById(a)
        ele.innerHTML = puzzle[i][j];
    }
}
}

function display(mat){
    for(let i=0; i < 9;i++){
        for(let j=0;j<9;j++){
            if(mat[i][j] == 0){
                var a = (i * 9)+j+1;
                var ele = document.getElementById(String(a))
                if (ele) {
                    ele.innerHTML = '';
                }}
            else{
                
                var a = (i * 9)+j+1;
                var ele = document.getElementById(String(a))
                if (ele) {
                    if(copy2[i][j] == 0){
                        ele.style.color = 'rgb(218, 200, 200)';
                    }
                    ele.innerHTML = mat[i][j];
                }
            }
            }
        }
        }

    

function isValid(mat, ind, num){
    i = ind[0]
    j = ind[1]
    // Vertical
    for(y = 0; y < 9; y++){
        if(num == mat[y][j]){
            return false
        }
    }

    //Box
    ini_a = Math.floor(i/3)*3
    ini_b = Math.floor(j/3)*3
    for(a = ini_a; a-ini_a<3;a++){
        for(b = ini_b;b-ini_b<3;b++){
            if(num == mat[a][b]){
                return false
            }
        }
    }
    if(mat[i].includes(num)){
        return false
    }
    return true
}

mem = []
function solver(mat){
    empty_ind = []
    for(i = 0; i < 9;i++){
        for(j=0;j<9;j++){
            if(mat[i][j] == 0){
                empty_ind.push([i, j])
            }
        }
    }
    var i = 0
    
    while(i < empty_ind.length){
        var a = empty_ind[i][0]
        var b = empty_ind[i][1]
        var changed = false
        for(x = mat[a][b]+1; x<=9;x++){

            if(isValid(mat, [a,b], x)){
                mat[a][b] = x
                changed = true
                i += 1
                mem.push([a,b,x,'white'])
                break
            }
            
        }
        if(!changed){
            mat[a][b] = 0
            mem.push([a,b,0])
            i -= 1
        }
}
}
function start(){
  document.getElementById("but").onclick = null;
    solver(puzzle)
var j = 0;

var inter = setInterval(() => {
    if(j<=mem.length){
    var a = mem[j][0]
    var b = mem[j][1]
    var x = mem[j][2]
    copy[a][b] = x
    display(copy)
    j += 1
    }
    else{
        clearInterval(inter)
    }
    
}, 1);
}

