import { View, Text, TouchableOpacity } from "react-native"
import {connect } from "react-redux"
import {increaseCounter, decreaseCounter} from '../redux/actions/counter.actions'

const CounterApp = ({counter, increaseCounter, decreaseCounter}) => {

    return(
        <View style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems:'center', gap: 200}}>
            <View style={{ display: 'flex', width: 100, height: 100, borderRadius: 100, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 40, fontWeight: "400"}}>{counter}</Text>
            </View>
            <View style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 30}}>
                <TouchableOpacity  onPress={decreaseCounter} style={{display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor: 'red', width: 150, height: 50, borderRadius: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>Decrease</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={increaseCounter} style={{display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor: 'green', width: 150, height: 50, borderRadius: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>Increase</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
    }
}

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);