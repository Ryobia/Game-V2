import React, { useState } from "react";
import $ from 'jquery';
import Circle from "../Circle";
import playerImg from '../../images/handi-capped.png';
import baddieImg from '../../images/baddie.png';


const Game = () => {
  let player = $('#player');
  let baddie = $('#baddie');
  let field = $('#field');
  let timerEl = $('#timer');
  let levelEl = $('#level');
  let startMenu = $('#startMenu');
  let start = document.getElementById('start');
  
  let level = 1;
  let speed = 10;
  let baddieSpeed = 10;
  let playerX = player.offset();
  let baddieX = baddie.offset();
  
  
  let init = function() {
      $('#startMenu').toggle();
      
  }
  
  let startGame = function() {
      $('#startMenu').toggle();
      let time = 0;
      let backgroundJunk = setInterval(function() {
          playerX = player.offset();
          baddieX = baddie.offset();
          baddieGo(playerX, baddieX);
  
  
      
          if (hitbox(player, baddie)) {
              alert("He got you");
              clearInterval(backgroundJunk);
              clearInterval(timer);
              resetGame();
          } else if (time >= 30) {
              alert('Congrats! you beat this level!');
              clearInterval(backgroundJunk);
              clearInterval(timer);
              resetGame();
  
          }
      
      }, 100);
  
      let timer = setInterval(function() {
          time += 1;
          console.log(time);
          $(timerEl).html(time);
          }, 1000);
  
  
  };
  
  let resetGame = function() {
      $('#startMenu').toggle();
      $(player).css({'position': 'absolute', 'left':'0%', 'bottom':'50%'}); //this works everytime
  
      $(baddie).css({'position': 'absolute', 'right':'0%', 'bottom':'50%'});//this rarely works and only if the game ends in a certain place
  
      
  
  
  
      // $(player).style
      // $(baddie).style    add the screen position reset here
  
  };
  
  
  
  
  init();
  
  let hitbox = function (player, baddie) {
  
      let playerOffset = player.offset();
      let playerHeight = player.outerHeight(true);
      let playerWidth = player.outerWidth(true);
      let playerTop = playerOffset.top + playerHeight;
      let playerLeft = playerOffset.left + playerWidth;
  
      let baddieOffset = baddie.offset();
      let baddieHeight = baddie.outerHeight(true);
      let baddieWidth = baddie.outerWidth(true);
      let baddieTop = baddieOffset.top + baddieHeight;
      let baddieLeft = baddieOffset.left + baddieWidth;
  
      return !(playerTop < baddieOffset.top || 
          playerOffset.top > baddieTop || 
          playerLeft < baddieOffset.left || 
          playerOffset.left > baddieLeft);
  };
  
  let outOfBounds = function(player, field, direction) {
  
      let playerOffset = player.offset();
      let playerHeight = player.outerHeight(true);
      let playerWidth = player.outerWidth(true);
      let playerTop = playerOffset.top + playerHeight;
      let playerLeft = playerOffset.left + playerWidth;
  
      let fieldOffset = field.offset();
      let fieldHeight = field.outerHeight(true);
      let fieldWidth = field.outerWidth(true);
      let fieldTop = fieldOffset.top + fieldHeight;
      let fieldLeft = fieldOffset.left + fieldWidth;
  
      switch (direction) {
          case 'w':
              return !(playerOffset.top - speed < fieldOffset.top);
              break;
  
          case 'a': 
              return !(playerOffset.left - speed < fieldOffset.left);
              break;
          
          case 's':
              return !(playerTop + speed > fieldTop);
              break;
          
          case 'd':
              return !(playerLeft + speed > fieldLeft);
              break;
      };
       
  
  };
  
  
  
  
  let baddieGo = function(playerX, baddieX) {
  
  
     
      if (baddieX.left < playerX.left) {
          $(baddie).animate({left: '+=' + baddieSpeed + 'px'}, 10);
  
      }
      if (baddieX.left > playerX.left) {
          $(baddie).animate({left: '-=' + baddieSpeed + 'px'}, 10);
  
      }
      if (baddieX.top < playerX.top) {
          $(baddie).animate({bottom: '-=' + baddieSpeed + 'px'}, 10);
          
      }
      if (baddieX.top > playerX.top) {
          $(baddie).animate({bottom: '+=' + baddieSpeed + 'px'}, 10);
      }
  
  
  
  };
  
  
  
  document.addEventListener("keydown", function(e) {
      if(e.key === 'w') {
          
          if (outOfBounds(player, field, e.key)) {
  
              $(player).animate({bottom: '+=' + speed + 'px'}, 10);
              // player.style.bottom = `${parseInt(player.style.bottom) + 5}px`;
         
          }    
      }
  });
  
  document.addEventListener("keydown", function(e) {
      if(e.key === 'a') {
          
  
          if (outOfBounds(player, field, e.key)) {
  
              
              $(player).animate({left: '-=' + speed + 'px'}, 10);
  
          }
        
          // player.style.left = `${parseInt(player.style.left) - 5}px`;
  
  
      }
  });
  
  document.addEventListener("keydown", function(e) {
      if(e.key === 's') {
  
          if (outOfBounds(player, field, e.key)) {
  
              $(player).animate({bottom: '-=' + speed + 'px'}, 10);
              // player.style.bottom = `${parseInt(player.style.bottom) - 5}px`;
  
          }
      }
  });
  
  document.addEventListener("keydown", function(e) {
      if(e.key === 'd') {
  
          if (outOfBounds(player, field, e.key)) {
  
              $(player).animate({left: '+=' + speed + 'px'}, 10);
              // player.style.left = `${parseInt(player.style.left) + 5}px`;
              
          }
  
      }
  });
  
 
   
 


    return <div>
      
      <section id="home">
      <div className="modal" id="startMenu" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenteredLabel">Generic Survival Game</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <h6>Controls</h6>
                  <ul>
                      <li>Up: W</li>
                      <li>Left: A</li>
                      <li>Down: S</li>
                      <li>Right: D</li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" id="difficulty" className="btn btn-primary col" data-dismiss="modal">Difficulty</button>
                  <button onClick={startGame}>Start Game</button>
                </div>
              </div>
            </div>
          </div>

          


            <div className="field">
          

              <div id="field" className="field-content">
                <img id="player" className="player" src={playerImg} alt="handi-capped" height="50px"/>
                <img id="baddie" className="baddie" src={baddieImg} alt="The-bad-guy" height="50px"/>    
              </div>
            </div>
      </section>
        
    </div>;
  
  };

export default Game;