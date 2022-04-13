// JavaScript Document


const typeWriter = document.getElementById('typewriter-text');

const text = 'سلام ابوالفضل فروغی هستم  به سایت من خوش آمدید....';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);