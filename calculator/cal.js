var buttons=document.getElementsByClassName("button");
var buttons1=document.getElementsByClassName("button1");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function()
    {
        var value=this.getAttribute('data-value');
        if(value=='+')
        {
            operator='+';
            operand1=parseFloat(display.textContent);
            display.innerText=null;    
        }
        else if(value=='-')
        {
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='*')
        {
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='/')
        {
            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerText=null;
            
        }
        else if(value=='=')// when two digit are required
        {
            operand2=parseFloat(display.textContent);
            display.innerText=null;
            
            if(operator=='+')
            {
                operand1=eval(operand2 + operand1);
                display.innerText=operand1;
            }
            else if(operator=='-')
            {
                operand1=eval(operand2 - operand1);
                display.innerText=operand1;

            }
            else if(operator=='*')
            {
                operand1=eval(operand2 * operand1);
                display.innerText=operand1;

            }
            else if(operator=='/')
            {
                operand1=eval(operand1 / operand2);
                display.innerText=operand1;

            }
            else if(operator=='n1')
            {
                operand1=Math.pow(operand1,operand2);
                display.innerText=operand1;
            
            }
            operand2=null;
            operator=null;
        }
        else if(value=='AC')
        {
            operand2=null;
            display.innerText=null;

        }
        else if(value=='!')
        {
            operand1=parseFloat(display.textContent);
            var a=1;
            for(var i=1;i<=operand1;i++)
            {
                a=a*i;

            }
            display.innerText=a;
            operand1=a;
        }
        else if(value=='sqrt')
        {
            operand1=parseFloat(display.textContent);
            operand1=Math.sqrt(operand1);
            display.innerText=operand1;
        }
        else if(value=='sin')
        {
            operand1=parseFloat(display.textContent);
            var a=(Math.PI/180)*operand1;
            operand1=Math.sin(a);
            display.innerText=operand1;
            operand1=a;
        }
        else if(value=='cos')
        {
            operand1=parseFloat(display.textContent);
            var a=(Math.PI/180)*operand1;
            operand1=Math.cos(a);
            display.innerText=operand1;
            operand1=a;
        }
        else if(value=='tan')
        {
            operand1=parseFloat(display.textContent);
            var a=(Math.PI/180)*operand1;
            operand1=Math.tan(a);
            display.innerText=operand1;
            operand1=a;
        }
        else if(value=='n')
        {
            operand1=parseFloat(display.textContent);
            operator='n1';
            display.innerText=null;
        }
        else if(value=='l')
        {
            operand1=parseFloat(display.textContent);
            var w=Math.log10(operand1);
            display.innerText=w;
            operand1=w;

        }
        else if(value=='l1')
        {
            operand1=parseFloat(display.textContent);
            display.innerText=Math.log(operand1);
        }
        else
        {
            display.innerText+=value;

        }


    });
    
}
for(var i=0;i<buttons1.length;i++)
{
    buttons1[i].addEventListener('click',function()
    {
        var value=this.getAttribute('data-value');
        if(value=='+')
        {
            operator='+';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

            
        }
        else if(value=='-')
        {
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='*')
        {
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='/')
        {
            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerText=null;
            
        }
        else if(value=='=')
        {
            operand2=parseFloat(display.textContent);
            display.innerText=null;
            if(operator=='+')
            {
                operand1=eval(operand2 + operand1);
                display.innerText=operand1;
            }
            else if(operator=='-')
            {
                operand1=eval(operand2 - operand1);
                display.innerText=operand1;

            }
            else if(operator=='*')
            {
                operand1=eval(operand2 * operand1);
                display.innerText=operand1;

            }
            else if(operator=='/')
            {
                operand1=eval(operand1 / operand2);
                display.innerText=operand1;

            }
        }
        else if(value=='AC')
        {
            operand2=null;
            display.innerText=null;

        }
        else
        {
            display.innerText+=value;

        }


    });

}
