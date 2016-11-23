var Plays = [
  {
    title:"All's Well That Ends Well",
    acts:[
      {
        title:"Act I",
        scenes: [
          {
            title:"SCENE II. Paris. The KING's palace.",
            lines:[]
          }
        ]
      }
    ]
  }
];

Plays[0].acts[0].scenes[0].lines[235] = "*King of France.*  The Florentines and Senoys are by the ears;";
Plays[0].acts[0].scenes[0].lines[236] = "Have fought with equal fortune and continue";
Plays[0].acts[0].scenes[0].lines[237] = "A braving war.";
Plays[0].acts[0].scenes[0].lines[238] = "*First Lord.* So 'tis reported, sir.";

module.exports = Plays;
