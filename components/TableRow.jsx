import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TableRow = (props) => {
    const { field, value, multiline } = props;
    let valueColumnLineHeight;
    if (multiline) {
        valueColumnLineHeight = 22;
    }
    return (
        <View style={styles.tableRow}>
            <View style={styles.tableColumn}>
                <Text style={styles.fieldText}>{field}</Text>
            </View>
            <View style={styles.tableColumn}>
                <Text style={{ ...styles.fieldText, lineHeight: valueColumnLineHeight }}>{value}</Text>
            </View>
        </View>
    )
}

export default TableRow;

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'row',
        marginBottom: 8
    },
    fieldText: {
        color: '#6B6B6B'
    },
    tableColumn: {
        width: '50%',
        justifyContent: 'flex-start'
    }
})
