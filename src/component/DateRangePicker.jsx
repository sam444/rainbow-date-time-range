import { OnChangeEvent, Param, UIInput, UITools, I18nUtil,UICell, Convertor, ConvertorConstant } from "rainbowui-core";
import { StringUtil, Util } from "rainbow-foundation-tools";
import i18n from "../js/i18n/reactjs-tag.i18n";
import config from "config";
import PropTypes from 'prop-types';
import { UIDateTimePicker } from "rainbowui-date-time-picker"
import "../css/style.css"
export default class DateRangePicker extends UIInput {
    constructor(props) {
        super(props)
    }

    renderInput() {
        return (
            <div id={this.componentId} className="input-group date dateRangeTime">
               <UICell type="flex" className="dateRangeTimeGroup">
                    <UICell type="flex" className="startDate">
                      <UIDateTimePicker widthAllocation="0,12"  findClass="dateRangeTime" onOk={this.setEndDate.bind(this)} onShow={this.startOnShow} model={this.props.model} property={this.props.startDateProperty}/>
                    </UICell>
                    <UICell type="flex" style={{paddingTop:'8px'}} >
                      {this.props.separator}
                    </UICell>
                    <UICell type="flex" className="endDate">
                      <UIDateTimePicker widthAllocation="0,12" findClass="dateRangeTime"  onOk={this.props.endOnOk}   onShow={this.endOnShow}  model={this.props.model} property={this.props.endDateProperty}/>
                    </UICell>
                    <UICell type="flex" style={{paddingTop:'3px',paddingRight:'5px'}}>
                         <span class="input-group-addon pickerposition" onClick={this.onClickIcon.bind(this)}><span class="glyphicon glyphicon-chevron-down"></span></span>
                         <div className="option">
                            <div class="dropdown-menu" style={{marginTop:'5px'}}>
                            <div className="option-table">
                            <UICell type="row">
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.yestoday.bind(this)}>{i18n.yestoday}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.today.bind(this)}>{i18n.today}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.tomorrow.bind(this)}>{i18n.tomorrow}</a>
                                </UICell>
                            </UICell>
                            <UICell type="row">
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.lastweek.bind(this)}>{i18n.lastweek}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.week.bind(this)}>{i18n.week}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.nextweek.bind(this)}>{i18n.nextweek}</a>
                                </UICell>
                            </UICell>
                            <UICell type="row">
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.lastmonth.bind(this)}>{i18n.lastmonth}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.month.bind(this)}>{i18n.month}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.nextmonth.bind(this)}>{i18n.nextmonth}</a>
                                </UICell>
                            </UICell>
                            <UICell type="row">
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.lastquarter.bind(this)}>{i18n.lastquarter}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.quarter.bind(this)}>{i18n.quarter}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.nextquarter.bind(this)}>{i18n.nextquarter}</a>
                                </UICell>
                            </UICell>
                            <UICell type="row">
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.lastyear.bind(this)}>{i18n.lastyear}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.year.bind(this)}>{i18n.year}</a>
                                </UICell>
                                <UICell width="4">
                                <a class="dropdown-item" href="javascript: void (0);" onClick={this.nextyear.bind(this)}>{i18n.nextyear}</a>
                                </UICell>
                            </UICell>
                            </div>
                            </div>
                         </div>
                    </UICell>
                </UICell>
            </div>
        );
    }

    lastyear(){
        const firstDay = moment().subtract(12, 'months').startOf('year').format(this.props.format);  
        const lastDay = moment().subtract(12, 'months').endOf('year').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }


    nextyear(){
        const firstDay = moment().add(12, 'months').startOf('year').format(this.props.format);  
        const lastDay = moment().add(12, 'months').endOf('year').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    lastmonth(){
        const firstDay = moment().subtract(1, 'months').startOf('months').format(this.props.format);  
        const lastDay = moment().subtract(1, 'months').endOf('months').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    nextmonth(){
        const firstDay = moment().add(1, 'months').startOf('months').format(this.props.format);  
        const lastDay = moment().add(1, 'months').endOf('months').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    lastquarter(){
        const firstDay = moment().subtract(3, 'months').startOf('quarter').format(this.props.format);  
        const lastDay = moment().subtract(3, 'months').endOf('quarter').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    nextquarter(){
        const firstDay = moment().add(3, 'months').startOf('quarter').format(this.props.format);  
        const lastDay = moment().add(3, 'months').endOf('quarter').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }


    nextweek(){
        const firstDay = moment().weekday(7).day(1).format(this.props.format);  
        const lastDay = moment().weekday(7).day(7).format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    lastweek(){
        const firstDay = moment().weekday(-7).day(1).format(this.props.format);  
        const lastDay = moment().weekday(-7).day(7).format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    yestoday(){
        const firstDay = moment().day(0).format(this.props.format);  
        const lastDay = moment().format(this.props.format);
        this.setdate(firstDay,lastDay);
    }


    tomorrow(){
        const firstDay = moment().format(this.props.format); 
        const lastDay  = moment().day(2).format(this.props.format); 
        this.setdate(firstDay,lastDay);
    }

    setdate(firstDay,lastDay){
        const rootObject = $("#" + this.componentId);
        const startObject = rootObject.find(".startDate").find("input");
        const endObject = rootObject.find(".endDate").find("input");
        startObject.val(firstDay);
        startObject.focus();
        endObject.val(lastDay);
        endObject.focus();
        const option = $("#" + this.componentId).find(".dropdown-menu");
        option.removeClass("show");
    }

    year(){
        const firstDay = moment().startOf('year').format(this.props.format);  
        const lastDay  = moment().endOf('year').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    quarter(){
        const firstDay = moment().startOf('quarter').format(this.props.format);  
        const lastDay  = moment().endOf('quarter').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    today(){
        const today = moment().format(this.props.format);
        this.setdate(today,today);
    }

    week(){
        const firstDay = moment().day(1).format(this.props.format); 
        const lastDay = moment().day(7).format(this.props.format);  
        this.setdate(firstDay,lastDay);
    }

    month(){
        const firstDay = moment().startOf('month').format(this.props.format);  
        const lastDay  = moment().endOf('month').format(this.props.format);
        this.setdate(firstDay,lastDay);
    }

    setEndDate(event){
        const endObject = $("#" + this.componentId).find(".endDate").find("input");
        let addDay = event.val;
        if(this.props.addNumber&&this.props.addType){
            addDay = moment(event.val,this.props.format).add(this.props.addNumber,this.props.addType).format(this.props.format);
        }
        endObject.val(addDay);
        endObject.focus();
        endObject.click();
        this.props.startOnOk?this.props.startOnOk(event):null;
    }

    initComponent() {
        
    }

    setComponentValue(startValue, endValue) {
        if (startValue && endValue) {
            const startDate = Convertor.getAsObject(this.getConvertorId(), this, startValue);
            const endDate = Convertor.getAsObject(this.getConvertorId(), this, endValue);

            const model = this.props.model;
            const startDateProperty = this.props.startDateProperty;
            const endDateProperty = this.props.endDateProperty;

            if (model && startDateProperty && endDateProperty) {
                model[startDateProperty] = startDate;
                model[endDateProperty] = endDate;
            }
        }
    }


    getComponentValue() {
        if (this.props.model && this.props.model[this.props.startDateProperty] && this.props.model[this.props.endDateProperty]) {
            return Convertor.getAsString(this.getConvertorId(), this, this.props.model[this.props.startDateProperty]) + this.props.separator + Convertor.getAsString(this.getConvertorId(), this, this.props.model[this.props.endDateProperty]);
        }
        /**
         * else  if (startValue || endValue  || startValueLink  || endValueLink ){
         *  let startValue = this.getValue(startValue || startValueLink.value);
            let endValue = this.getValue(endValue || endValueLink.value);
             if (startValue != null && endValue != null) {
                return Convertor.getAsString(this.getConvertorId(), this, startValue) + separator + Convertor.getAsString(this.getConvertorId(), this, endValue);
            }
            return null;
         */
        else if (this.props.startValue || this.props.endValue) {

            let startValue = this.getValue(this.props.startValue);
            let endValue = this.getValue(this.props.endValue);

            if (startValue != null && endValue != null) {
                return Convertor.getAsString(this.getConvertorId(), this, startValue) + this.props.separator + Convertor.getAsString(this.getConvertorId(), this, endValue);
            }
            return null;
        } else if (this.props.defaultValue) {
            let _self = this;
            let value = this.props.defaultValue.split(" ");
            const startDate = value[0];
            const endDate = value[1];
            const model = this.props.model;
            const startDateProperty = this.props.startDateProperty;
            const endDateProperty = this.props.endDateProperty;
            if (model && startDateProperty && endDateProperty) {
                model[startDateProperty] = startDate;
                model[endDateProperty] = endDate;
            }
            return Convertor.getAsString(this.getConvertorId(), this, StringUtil.trim(value[0])) + this.props.separator + Convertor.getAsString(this.getConvertorId(), this, StringUtil.trim(value[1]));
        }
        return null;
    }

    onClickIcon(event) {
        const endObject = $("#" + this.componentId).find(".dropdown-menu");
        endObject.addClass("show");
        endObject.mouseleave(function(){
            endObject.removeClass("show");
        });
          
    }

    getConvertorId() {
        return ConvertorConstant.DATETIMEPICKER_CONVERTOR;
    }

};


/**
 * DateRangePicker component prop types
 */
DateRangePicker.propTypes = $.extend({}, UIInput.propTypes, {
    label: PropTypes.string,
    separator: PropTypes.string,
    format: PropTypes.string,
    componentType: PropTypes.string,
    model: PropTypes.object,
    startDateProperty: PropTypes.string,
    endDateProperty: PropTypes.string,
    startOnOk:PropTypes.function,
    endOnOk:PropTypes.function,
    startOnShow:PropTypes.function,
    endOnShow:PropTypes.function,
});

/**
 * Get DateRangePicker component default props
 */
DateRangePicker.defaultProps = $.extend({}, UIInput.defaultProps, {
    separator: " ~ ",
    format: config.DEFAULT_DATETIME_FORMATER,
});
