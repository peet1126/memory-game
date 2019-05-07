# memory-game
## Pseudocode 
1. Initialize function  
  * 16 cards face down   
  * Cards array with card img  
  * Click turn = 1  
  * Randomize cards function  
2. Game starts when any card is clicked   
  * Starts timer   
3. Game ends when all cards stay face up  
  * Ends timer   
3. Card check function  
  * Flip card over when clicked   
  * Remember if it is click 1 or -1   
  * If pick 1 and pick -1 are equal keep cars face up   
  * Else flip both cards back over after 2 seconds  
4. Card matches  
  * Remove the event listener after a card match  
5. Reset game  
  * After clicked runs initialize function
## Click through 
1. Click 1. One card is clicked it flips over. 
2. Click -1. Another card is clicked it flips over.
3. Check if the cards match.
  * Delay for 2 seconds.  
  * If match remove event listener.  
  * Else both cards flip back over.  
4. Repeat steps 1-4.
5. Game is won when 8 matches are found.
6. Display win message 
7. Click reset button 
## Wire Frame
[Wire frame link](https://wireframe.cc/vTwd6D)
