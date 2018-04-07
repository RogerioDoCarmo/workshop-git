module.exports = class Calculator{

	print(a,b){
		return String("a = "+a, "b = "+b);
	}

	// implementar as outras funções aqui
	sum(a,b){
		return a + b;
	}
	
	subtract(a,b){
		return a-b;
	}

	divide(a,b){
		if(b != 0) return a%b;
		else return(-1);
	}
}

