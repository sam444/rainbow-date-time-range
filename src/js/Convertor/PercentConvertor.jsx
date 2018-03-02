import NumberUtil from "../util/NumberUtil";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/16
//	
//	author: yonglu.xie
//	
//	description: PercentConvertor Class
//-----------------------------------------------------------------------------------------------
var PercentConvertor = {
	
	/**
	 * Submit Data --> onchange set value
	 */
	getAsObject: function(component, value){
		if(value != "" && value != null && value != undefined){
			//let formatValue = component.formatDigit(component.canonicalDigit(value));
			value = value.replace(/[^0-9\.\-]/g, "");
			//eg: 33.55->0.3355, 5.55->0.0555
			//let result = NumberUtil.divide(value,  parseInt(component.props.limit));
			//let result = parseFloat(value / parseInt(component.props.limit));
			let result = parseFloat(value / 100);
			return parseFloat(result.toFixed(parseInt(component.decimalPrecision) + 2));
		}
		return null;
	},
	
	/**
	 * Render Data --> render set value
	 */
	getAsString: function(component, value){
		if(value != "" && value != null && value != undefined){
			let result = NumberUtil.multiply(value,100);
			return component.formatDigit(component.canonicalDigit(result));
		}
		
		return value;//"";
	}
	
};

module.exports = PercentConvertor;
