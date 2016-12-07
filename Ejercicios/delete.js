var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
    document.write(trees[3]);
} else{
	 document.write(trees);
}