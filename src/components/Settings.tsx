import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteContainer } from '../services/ContainerService';

const Settings: React.FC = () => {
    const { containerId } = useParams<{ containerId: string }>();
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<'success' | 'danger' | null>(null);

    const handleDelete = async () => {
        if (!containerId) {
            setAlertMessage('Container ID not found');
            setAlertType('danger');
            return;
        }

        try {
            await deleteContainer(containerId);
            setAlertMessage('Container deleted successfully');
            setAlertType('success');
        } catch (error) {
            setAlertMessage('Failed to delete container');
            setAlertType('danger');
        }
    };

    return (
        <div className="container mt-4">
            {alertMessage && (
                <div className={`alert mt-3 alert-${alertType}`} role="alert">
                    {alertMessage}
                </div>
            )}
            <div className="card">
                <div className="card-body d-flex flex-column justify-content-center" style={{ height: '200px' }}>
                    <h2 className="card-title">Settings</h2>
                    <p className="text-secondary">
                        You can delete this container at any time.
                        <br/>
                        This will remove all data and configurations associated with it.
                    </p>
                    <div className="d-flex justify-content-end align-items-center flex-grow-1">
                        <button className="btn btn-danger" onClick={handleDelete}>
                            Delete Container
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
