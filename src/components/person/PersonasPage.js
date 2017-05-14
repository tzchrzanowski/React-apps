import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as championActions from '../../actions/championActions';

class PersonasPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state={
            champion: { name: ""}
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event){
        const champion = this.state.champion;
        champion.name = event.target.value;
        this.setState({champion: champion});
    }

    onClickSave(){
        this.props.dispatch(championActions.createChampion(this.state.champion));
    }

    championRow(champion, index){
        return(
            <div key={index}>
                {champion.name}
            </div>
        );
    }
    render() {
        return(
            <div>
                <h1>Champions</h1>
                {this.props.champion.map(this.championRow)}
                <h2>Add Champion</h2>
                <input type="text"
                onChange={this.onNameChange}
                value={this.state.champion.name}/>
                
                <input type="submit"
                value="save"
                onClick={this.onClickSave}/>
            </div>
        );
    }
}

PersonasPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    champion: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        champion: state.champion
    };
}

export default connect(mapStateToProps)(PersonasPage); 