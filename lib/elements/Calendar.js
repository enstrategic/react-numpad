import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const createDateObjects = (date, weekOffset = 0) => {
    const startOfMonth = date.startOf('month');

    let diff = startOfMonth.weekday() - weekOffset;
    if (diff < 0) diff += 7;

    const prevMonthDays = [];
    for (let i = 0; i < diff; i++) {
        prevMonthDays.push({
            day: startOfMonth.clone().subtract(diff - i, 'days'),
            classNames: 'prevMonth'
        });
    }

    const currentMonthDays = [];
    for (let i = 1; i < date.daysInMonth() + 1; i++) {
        currentMonthDays.push({
            day: moment([date.year(), date.month(), i])
        });
    }

    const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

    const nextMonthDays = [];
    let i = 1;
    while ((daysAdded + i) % 7 !== 0) {
        nextMonthDays.push({
            day: currentMonthDays[currentMonthDays.length - 1].day
                .clone()
                .add(i, 'days'),
            classNames: 'nextMonth'
        });

        i += 1;
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}

class Calendar extends Component {

    constructor(props) {
        super(props)
        this.state = { date: props.date }
        this.handleNextMonth = this.handleNextMonth.bind(this)
        this.handlePrevMonth = this.handlePrevMonth.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    handleNextMonth() {
        this.setState((oldState) => ({date: oldState.date.add(1, 'months')}))
    }

    handlePrevMonth() {
        this.setState((oldState) => ({date: oldState.date.subtract(1, 'months')}))
    }

    onChange(day) {
        this.setState({date: moment(day)}, () => this.props.onChange(this.state.date))
    }

    render() {
        const { locale, weekOffset } = this.props;
        let { date } = this.state

        return (
            <div className="Calendar">
                <div className="Calendar-header">
                    <button onClick={this.handlePrevMonth}>«</button>
                    <div className="Calendar-header-currentDate">
                        {date.locale(locale).format('MMMM YYYY')}
                    </div>
                    <button onClick={this.handleNextMonth}>»</button>
                </div>
                <div className="Calendar-grid">
                    { Array(7).fill().map((_, i) => i+1+weekOffset).map(weekDay => (
                        <div key={`week-day-${weekDay}`} className="Calendar-grid-item">
                            {moment().isoWeekday(weekDay).locale(locale).format('dd')}
                        </div>
                    )) }

                    {createDateObjects(moment(date), weekOffset).map((day, i) => (
                        <div 
                            key={`day-${i}`}
                            className={`Calendar-grid-item ${day.classNames || ''} ${day.day.isSame(date, 'day') ? 'active' : ''}`}
                            onClick={() => this.onChange(day.day)}>
                            {day.day.format('D')}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Calendar.propTypes = {
    /** Week offset*/
    weekOffset: PropTypes.number.isRequired,
    /** The current date as a moment objecct */
    date: PropTypes.object.isRequired,
    /** Called when a date is clicked */
    onChange: PropTypes.func
};

Calendar.defaultProps = {
    weekOffset: 0,
    date: moment(),
    locale: 'en'
};

export default Calendar