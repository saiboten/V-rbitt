var Banner = React.createClass({

    getInitialState: function() {
        return { header: "Værbitt", content: "A metal band from Norway", time: 0};
    },

    updateTime: function() {
        this.state.time = this.state.time+1;
        this.setState({time: this.state.time});
    },

    componentDidMount: function() {
        setInterval( this.updateTime,  1000);
    },

    render: function() {
        return (
            <div class="inner">
                <h2>{this.state.header} - {this.state.time}</h2>
                <p>{this.state.content}</p>
            </div>
            );
    }
});
React.render(
    <Banner />,
    document.getElementById('banner')
);