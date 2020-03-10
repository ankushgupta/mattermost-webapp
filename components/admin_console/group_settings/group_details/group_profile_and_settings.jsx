// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';
import AdminPanel from 'components/widgets/admin_console/admin_panel';
import GroupProfile from 'components/admin_console/group_settings/group_details/group_profile';
import GroupMention from 'components/admin_console/group_settings/group_details/group_mention';

import {t} from 'utils/i18n';

import LineSwitch from 'components/admin_console/team_channel_settings/line_switch.jsx';

const GroupSettingsToggle = ({isDefault, allowReference, onToggle}) => (
    <LineSwitch
        disabled={isDefault}
        toggled={allowReference}
        last={allowReference}
        onToggle={() => {
            if (isDefault) {
                return;
            }
            onToggle(!allowReference);
        }}
        singleLine={false}
        title={(
            <FormattedMessage
                id='admin.team_settings.team_details.groupDetailsToggle'
                defaultMessage='Enable Group Mention'
            />
        )}
        subTitle={(
            <FormattedMarkdownMessage
                id='admin.team_settings.team_details.groupDetailsToggleDescr'
                defaultMessage='When enabled, the group will be visible and accessible to users to mention by the name below. The membership of this group will become visible.'
            />
        )}
    />);

GroupSettingsToggle.propTypes = {
    isDefault: PropTypes.bool.isRequired,
    allowReference: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export const GroupProfileAndSettings = ({name, allowReference, onToggle}) => (
    <AdminPanel
        id='group_profile'
        titleId={t('admin.group_settings.group_detail.groupProfileTitle')}
        titleDefault='Group Profile'
        subtitleId={t('admin.group_settings.group_detail.groupProfileDescription')}
        subtitleDefault='The name for this group.'
    >
        <GroupProfile
            name={name}
        />
        <div className='group-settings'>
            <div className='group-settings--body'>
                <div className='section-separator'><hr className='separator__hr'/></div>
                <GroupSettingsToggle
                    isDefault={false}
                    allowReference={allowReference}
                    onToggle={onToggle}
                />
            </div>
        </div>
        {allowReference &&
            <GroupMention
                name={name}
            />
        }
    </AdminPanel>);

GroupProfileAndSettings.propTypes = {
    name: PropTypes.string.isRequired,
    allowReference: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};
