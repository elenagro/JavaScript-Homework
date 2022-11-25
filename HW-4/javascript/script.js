/* Имате две низи:
var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
направете нова низа во која што ќе ги ставите сите имиња кој двете низи ги делат (Jill, Kate)
 */

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var mutualFollowers = [];

for (i = 0; i < JohnFollowers.length; i++) {
    for (e = 0; e < JaneFollowers.length; e++) {
        if (JohnFollowers[i] === JaneFollowers[e])
            mutualFollowers.push(JohnFollowers[i]);
    }
}
console.log(mutualFollowers);

/* Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
output во конзолата :
#
##
###
####
#####
###### */

var brick = "#"

for (var i = 0; i <= 6; i++) {
    brick += "#";
    console.log(brick);
}

/* or another way

var brick = "#"
var tower = brick;

for (var i = 0; i <= 6; i++) {
    tower += "#"; || tower += brick;
    console.log(tower);
}
*/

