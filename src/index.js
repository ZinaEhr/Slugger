function slugger(...args){
	 	//log.obj(args,'args:');
        str = args.reduce( (total,curr) => total + curr + '-' , '');
	 	return str.substring(0, str.length - 1);
}  

module.exports = {slugger};