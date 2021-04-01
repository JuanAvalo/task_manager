import React from 'react';
import moment from 'moment';
import { Grid, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Quote from './quotes/Quote';
import Calendar from './calendar/Calendar';
import Task from './tasks/Task';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            date: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    handleDateChange = (newDate) => {
        
        this.setState({date: newDate}, () => {
        });
    }

    render () {
        return (
            <div className="appbody"> 
                <Grid divided padded>

                    <Grid.Row centered>
                        <Grid.Column width={8}>
                        <Segment inverted>
                            <Header as="h2" inverted color="blue">Task Manager</Header>
                        </Segment>
                        </Grid.Column>
                    </Grid.Row>  

                    <Grid.Row centered columns={2}>                 
                        <Grid.Column width={4}>
                            <Calendar 
                                handleDateChange={this.handleDateChange} 
                                date={this.state.date}
                            />
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Quote date = {this.state.date}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered columns={1}>
                        <Grid.Column width={6}>
                            <Task date={this.state.date}/>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>

            </div>
        )
    }
}

export default App;