import React from 'react'
import { connect } from 'react-redux'
import Panel from '../Panel/Panel'
import styles from './Logbook.module.css'
import {fetchLogs} from "../../store/actions/logBook";
import LinearLoader from '../Loaders/LinearLoader'


class Logbook extends React.Component {

    componentDidMount() {
        this.props.fetchLogs()
    }

    render() {
        return (
            <Panel title="Logbook" isActive={this.props.isActive}>
                <div className={styles.Logbook}>
                    {
                        this.props.logs && this.props.logs.length != 0 && !this.props.isFetching
                            ?  renderLogs(this.props.logs)
                            : <LinearLoader/>
                    }
                </div>
            </Panel>
        )
    }
}

function renderLogs(logs) {
    return (<table className="striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Entity</th>
                <th>Action</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {
                logs.map((log, index) => (
                    <tr key={index}>
                        <td>{index + 1}.</td>
                        <td>{log.entity}</td>
                        <td>{log.action}</td>
                        <td>{log.value}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

function mapStateToProps(state) {
    return {
        logs: state.logBook.logs,
        isFetching: state.logBook.isFetching,
        error: state.logBook.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLogs: () => dispatch(fetchLogs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logbook)
