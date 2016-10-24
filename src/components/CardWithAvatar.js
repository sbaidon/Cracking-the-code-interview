import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const CardWithAvatar = ({avatar, title, subtitle, text}) => (
  <Card
    className="Card"
  >
    <CardHeader
      title={avatar.title}
      subtitle={<a href={avatar.subtitle}>link</a>}
      avatar={avatar.image}
    />
    <CardTitle title={title} subtitle={<code className="prettyprint">{subtitle}</code>}/>
    <CardText>
      {text}
    </CardText>
  </Card>
);

export default CardWithAvatar;