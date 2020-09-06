import {randomize} from './Sorting/Sort.js';
import {createCells} from './Graphs/Graph.js';

function setAlgo(i){
    if(algo==-1 && i>-1 && i<2){
        algo = i;
        $('#stage1').hide();
        switch(i){
            case 0: $('#bars').show(); $('#sorting').show(); $('#sort_options').show(); randomize();  break;
            case 1: $('table').show();$('#graph').show(); $('#graph_options').show(); createCells(); break;
            default: return;
        }

    }
}

function back(object){
    if(object && object.inProgress){
        return;
    }
    select(-1);
    algo=-1;
    $('#table').hide();
    $('#bars').html('');
    $('#bars').show();
    $('#sorting').hide(); 
    $('#sort_options').hide();
    $('#graph').hide(); 
    $('#graph_options').hide();
    $('#stage1').show();
}

function select(t){
    if(type!=-1){
        document.querySelector("#btn-"+type).style.backgroundColor="";
    }
    if(t>-1){
        document.querySelector("#btn-"+t).style.backgroundColor="#dc3545";
        
    }
        type=t;
}
export {select,setAlgo,back};



