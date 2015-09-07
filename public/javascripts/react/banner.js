var Banner = React.createClass({

    getInitialState: function() {
        return { header: "Værbitt", content: "Atmospheric, heavy and cold extreme metal from Bergen, Norway"};
    },

    updateTime: function() {
        this.state.time = this.state.time+1;
        this.setState({time: this.state.time});
    },

    render: function() {
        return (
            <div class="inner">
                <h2>{this.state.header}</h2>
                <p>{this.state.content}</p>
            </div>
            );
    }
});
React.render(
    <Banner />,
    document.getElementById('banner')
);